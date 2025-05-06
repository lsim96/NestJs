import { LoggerService } from './../logger/logger.service';
import { Response } from 'express';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { Product, ProductFilters } from './interfaces/product.interface';
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

@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private loggerService: LoggerService,
  ) {}

  @Get()
  getAllProducts(
    @Query('title') title: string,
    @Query('inStock') insStock: string,
    @Query('minPrice') minPrice: string,
    @Query('maxPrice') maxPrice: string,
  ) {
    const productFilter: ProductFilters = {
      title,
      inStock: !!insStock,
      minPrice: !Number.isNaN(Number(minPrice)) ? Number(minPrice) : null,
      maxPrice: !Number.isNaN(Number(maxPrice)) ? Number(maxPrice) : null,
    };

    this.loggerService.addLog('products fetched');

    return this.productsService.getAllProducts(productFilter);
  }

  @Get(':id')
  getProductById(@Param('id') productId: string) {
    return this.productsService.getProductsById(productId);
  }

  @Post()
  create(@Body() createData: CreateProductDto) {
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
