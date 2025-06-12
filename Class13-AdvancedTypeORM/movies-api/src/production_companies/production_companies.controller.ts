import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductionCompaniesService } from './production_companies.service';
import { CreateProductionCompanyDto } from './dto/create-production_company.dto';
import { UpdateProductionCompanyDto } from './dto/update-production_company.dto';

@Controller('production-companies')
export class ProductionCompaniesController {
  constructor(
    private readonly productionCompaniesService: ProductionCompaniesService,
  ) {}

  @Post()
  create(@Body() createProductionCompanyDto: CreateProductionCompanyDto) {
    return this.productionCompaniesService.create(createProductionCompanyDto);
  }

  @Get()
  findAll() {
    return this.productionCompaniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productionCompaniesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductionCompanyDto: UpdateProductionCompanyDto,
  ) {
    return this.productionCompaniesService.update(
      +id,
      updateProductionCompanyDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionCompaniesService.remove(+id);
  }
}
