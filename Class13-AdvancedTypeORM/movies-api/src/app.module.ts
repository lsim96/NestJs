import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { DirectorsModule } from './directors/directors.module';
import { ActorsModule } from './actors/actors.module';
import { CastMembersModule } from './cast-members/cast-members.module';
import { GenresModule } from './genres/genres.module';
import { ActorAwardsModule } from './actor_awards/actor_awards.module';
import { MovieAwardsModule } from './movie_awards/movie_awards.module';
import { AwardsModule } from './awards/awards.module';
import { ProductionCompaniesModule } from './production_companies/production_companies.module';
import { MovieProductionCompaniesModule } from './movie_production_companies/movie_production_companies.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    MoviesModule,
    DirectorsModule,
    ActorsModule,
    CastMembersModule,
    GenresModule,
    ActorAwardsModule,
    AwardsModule,
    MovieAwardsModule,
    AwardsModule,
    ProductionCompaniesModule,
    MovieProductionCompaniesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
