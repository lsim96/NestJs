import { PartialType } from '@nestjs/mapped-types';
import { CreateProductionCompanyDto } from './create-production_company.dto';

export class UpdateProductionCompanyDto extends PartialType(CreateProductionCompanyDto) {}
