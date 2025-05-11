import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

// export class UpdateProductDto {
//   @IsString()
//   @Length(3, 30)
//   @IsOptional()
//   title: string;

//   @IsOptional()
//   @IsNumber()
//   @Min(0)
//   stock: number;

//   @IsOptional()
//   @IsNumber()
//   @Min(1)
//   price: number;
// }

export class UpdateProductDto extends PartialType(CreateProductDto) {}
