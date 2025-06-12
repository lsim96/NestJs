import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovieAwardsService } from './movie_awards.service';
import { CreateMovieAwardDto } from './dto/create-movie_award.dto';
import { UpdateMovieAwardDto } from './dto/update-movie_award.dto';

@Controller('movie-awards')
export class MovieAwardsController {
  constructor(private readonly movieAwardsService: MovieAwardsService) {}

  @Post()
  create(@Body() createMovieAwardDto: CreateMovieAwardDto) {
    return this.movieAwardsService.create(createMovieAwardDto);
  }

  @Get()
  findAll() {
    return this.movieAwardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieAwardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieAwardDto: UpdateMovieAwardDto) {
    return this.movieAwardsService.update(+id, updateMovieAwardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieAwardsService.remove(+id);
  }
}
