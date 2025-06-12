import { Module } from '@nestjs/common';
import { ActorAwardsService } from './actor_awards.service';
import { ActorAwardsController } from './actor_awards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorAward } from './entities/actor_award.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActorAward])],
  controllers: [ActorAwardsController],
  providers: [ActorAwardsService],
})
export class ActorAwardsModule {}
