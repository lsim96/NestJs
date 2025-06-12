import { Module } from '@nestjs/common';
import { MovieProductionCompaniesService } from './movie_production_companies.service';
import { MovieProductionCompaniesController } from './movie_production_companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieProductionCompany } from './entities/movie_production_company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieProductionCompany])],
  controllers: [MovieProductionCompaniesController],
  providers: [MovieProductionCompaniesService],
})
export class MovieProductionCompaniesModule {}
