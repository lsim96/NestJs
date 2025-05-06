import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @Length(3, 30)
  @IsOptional()
  title: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  stock: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  price: number;
}
