import { Module } from '@nestjs/common';
import { MovieAwardsService } from './movie_awards.service';
import { MovieAwardsController } from './movie_awards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieAwards } from './entities/movie_award.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieAwards])],
  controllers: [MovieAwardsController],
  providers: [MovieAwardsService],
})
export class MovieAwardsModule {}
