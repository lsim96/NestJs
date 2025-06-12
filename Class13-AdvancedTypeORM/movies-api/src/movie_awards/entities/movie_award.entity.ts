import { Award } from 'src/awards/entities/award.entity';
import { Movie } from 'src/movies/entities/movie.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity('movie_awards')
export class MovieAwards {
  @PrimaryColumn({
    name: 'movie_id',
  })
  movieId: number;

  @PrimaryColumn({
    name: 'award_id',
  })
  awardId: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: number;

  @ManyToOne(() => Award, (award) => award.movieAwards)
  @JoinColumn({
    name: 'award_id',
  })
  award: Award;

  @ManyToOne(() => Movie, (movie) => movie.castMembers)
  @JoinColumn({
    name: 'movie_id',
  })
  movie: Movie;
}
