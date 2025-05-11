import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersService } from './players.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('players')
export class PlayersController {
  constructor(private playerService: PlayersService) {}

  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Post()
  create(@Body() createData: CreatePlayerDto) {
    return this.playerService.create(createData);
  }
}
