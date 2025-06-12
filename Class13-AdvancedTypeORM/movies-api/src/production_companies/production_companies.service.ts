import { Injectable } from '@nestjs/common';
import { CreateProductionCompanyDto } from './dto/create-production_company.dto';
import { UpdateProductionCompanyDto } from './dto/update-production_company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductionCompany } from './entities/production_company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductionCompaniesService {
  constructor(
    @InjectRepository(ProductionCompany)
    private productionCompanyRepo: Repository<ProductionCompany>,
  ) {}
  create(createProductionCompanyDto: CreateProductionCompanyDto) {
    return 'This action adds a new productionCompany';
  }

  findAll() {
    return this.productionCompanyRepo.find();
  }

  async findOne(id: number) {
    const foundCompany = await this.productionCompanyRepo.findOne({
      where: { id },
      relations: {
        movieProductionCo: {
          movie: true,
          productionCompany: true,
        },
      },
    });

    return foundCompany;
  }

  update(id: number, updateProductionCompanyDto: UpdateProductionCompanyDto) {
    return `This action updates a #${id} productionCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} productionCompany`;
  }
}
