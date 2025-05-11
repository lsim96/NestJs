import { LoggerService } from './../logger/logger.service';
import { Response } from 'express';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFilters } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ProductDto } from './dtos/product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private loggerService: LoggerService,
  ) {}

  @Get()
  @ApiQuery({
    name: 'title',
    required: false,
  })
  @ApiQuery({
    name: 'inStock',
    required: false,
  })
  @ApiQuery({
    name: 'minPrice',
    required: false,
  })
  @ApiQuery({
    name: 'maxPrice',
    required: false,
  })
  @ApiOperation({ summary: 'endpoint that fetches all products' })
  @ApiOkResponse({
    type: ProductDto,
    isArray: true,
  })
  @ApiInternalServerErrorResponse({
    description: "the server couldn't fetch the products",
  })
  getAllProducts(
    @Query('title') title: string,
    @Query('inStock') inStock: string,
    @Query('minPrice') minPrice: string,
    @Query('maxPrice') maxPrice: string,
  ) {
    const productFilter: ProductFilters = {
      title,
      inStock: !!inStock,
      minPrice: !Number.isNaN(Number(minPrice)) ? Number(minPrice) : null,
      maxPrice: !Number.isNaN(Number(maxPrice)) ? Number(maxPrice) : null,
    };

    this.loggerService.addLog('products fetched');

    return this.productsService.getAllProducts(productFilter);
  }

  @Get(':id')
  @ApiOperation({ summary: 'endpoint that fetches a product by id ' })
  @ApiOkResponse({
    type: ProductDto,
  })
  getProductById(@Param('id') productId: string) {
    return this.productsService.getProductsById(productId);
  }

  @Post()
  @ApiOperation({ summary: 'endpoint that creates a product' })
  @ApiOkResponse({
    type: ProductDto,
  })
  createProduct(@Body() createData: CreateProductDto) {
    return this.productsService.createProduct(createData);
  }

  @HttpCode(204)
  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() updateData: UpdateProductDto) {
    return this.productsService.updateProduct(id, updateData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string, @Res() res: Response) {
    await this.productsService.deleteProduct(id);

    res.sendStatus(204);
  }
}
