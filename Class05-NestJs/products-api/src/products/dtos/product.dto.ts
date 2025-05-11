import { ApiProperty } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class ProductDto extends CreateProductDto {
  @ApiProperty({
    description: 'the id of the project, a valid v4 uuid',
    example: 'f165988a-7d8a-4846-bbf2-6ed3417872e4',
  })
  id: string;
}
