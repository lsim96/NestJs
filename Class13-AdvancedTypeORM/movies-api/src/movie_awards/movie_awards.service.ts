import { Injectable } from '@nestjs/common';
import { CreateMovieAwardDto } from './dto/create-movie_award.dto';
import { UpdateMovieAwardDto } from './dto/update-movie_award.dto';

@Injectable()
export class MovieAwardsService {
  create(createMovieAwardDto: CreateMovieAwardDto) {
    return 'This action adds a new movieAward';
  }

  findAll() {
    return `This action returns all movieAwards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movieAward`;
  }

  update(id: number, updateMovieAwardDto: UpdateMovieAwardDto) {
    return `This action updates a #${id} movieAward`;
  }

  remove(id: number) {
    return `This action removes a #${id} movieAward`;
  }
}
