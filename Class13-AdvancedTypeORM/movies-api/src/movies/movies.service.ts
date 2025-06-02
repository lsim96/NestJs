import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private movieRepo: Repository<Movie>) {}

  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  findAll() {
    const queryBuilder = this.movieRepo
      .createQueryBuilder('movies')
      .select(['movies.id', 'movies.title', 'movies.budget'])
      .offset(5)
      .limit(5);

    return queryBuilder.getMany();
  }

  async findOne(id: number) {
    const foundMovie = await this.movieRepo.findOne({
      where: { id },
      relations: {
        director: true,
        genres: true,
        castMembers: {
          actor: true,
        },
      },
    });

    const builderQuery = this.movieRepo
      .createQueryBuilder('movie')
      .leftJoinAndSelect('movie.genres', 'genre')
      .leftJoinAndSelect('movie.director', 'director')
      .where('movie.id = :movieId', { movieId: id })
      .getOne();

    const rawQuery = this.movieRepo.query(
      `
        select * from movies m
        left join movie_genres mg on mg.movie_id = m.movie_id
        left join genres g on mg.genre_id = g.genre_id
        left join directors d on d.director_id = m.director_id
        where m.movie_id = $1;
        `,
      [id],
    );

    if (!foundMovie) throw new NotFoundException('Movie not found');

    return foundMovie;
  }

  async getMovieCountByGenre() {
    const response = await this.movieRepo
      .createQueryBuilder('movie')
      .leftJoin('movie.genres', 'genre')
      .select('genre.id', 'id')
      .addSelect('genre.name', 'name')
      .addSelect('COUNT(movie.id)', 'movieCount')
      .groupBy('genre.id')
      .orderBy('genre.id')
      .getRawMany();

    return response.map((r) => ({ ...r, movieCount: Number(r.movieCount) }));
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
