import { Module } from '@nestjs/common';
import { ProductionCompaniesService } from './production_companies.service';
import { ProductionCompaniesController } from './production_companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionCompany } from './entities/production_company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductionCompany])],
  controllers: [ProductionCompaniesController],
  providers: [ProductionCompaniesService],
})
export class ProductionCompaniesModule {}
