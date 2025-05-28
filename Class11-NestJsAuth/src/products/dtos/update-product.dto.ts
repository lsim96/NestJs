import { CreateProductDto } from './create-product.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProdutDto extends PartialType(CreateProductDto) {}
