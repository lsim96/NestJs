import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { ProductFilters } from './interfaces/product.interface';
import { v4 as uuid } from 'uuid';
import { UpdateProductDto } from './dtos/update-product.dto';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductDto } from './dtos/product.dto';

@Injectable()
export class ProductsService {
  private PRODUCTS_PATH = join(
    process.cwd(),
    'src',
    'products',
    'data',
    'products.json',
  );

  async getAllProducts(filters?: ProductFilters) {
    const productsJson = await readFile(this.PRODUCTS_PATH, 'utf-8');

    let products = JSON.parse(productsJson) as ProductDto[];

    if (filters?.title) {
      products = products.filter((product) =>
        product.title
          .toLowerCase()
          .includes(filters.title?.toLowerCase() as string),
      );
    }

    if (filters?.inStock) {
      products = products.filter((product) => product.stock > 0);
    }

    if (filters?.minPrice) {
      products = products.filter(
        (product) => product.price >= (filters.minPrice as number),
      );
    }

    if (filters?.maxPrice) {
      products = products.filter(
        (product) => product.price <= (filters.maxPrice as number),
      );
    }

    return products;
  }

  async saveProducts(products: ProductDto[]) {
    await writeFile(
      this.PRODUCTS_PATH,
      JSON.stringify(products, null, 2),
      'utf-8',
    );
  }

  async getProductsById(id: string) {
    const products = await this.getAllProducts();

    const foundProduct = products.find((product) => product.id === id);

    if (!foundProduct) throw new NotFoundException('product not found');

    return foundProduct;
  }

  async createProduct(productData: CreateProductDto) {
    const products = await this.getAllProducts();

    const newProduct: ProductDto = {
      ...productData,
      id: uuid(),
    };

    products.push(newProduct);

    await this.saveProducts(products);

    return newProduct;
  }

  async updateProduct(productId: string, updateData: UpdateProductDto) {
    const products = await this.getAllProducts();

    const productExists = products.some((product) => product.id === productId);

    if (!productExists) throw new NotFoundException('Product not found');

    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, ...updateData } : product,
    );

    await this.saveProducts(updatedProducts);
  }

  async deleteProduct(id: string) {
    const products = await this.getAllProducts();

    const updatedProducts = products.filter((product) => product.id !== id);

    if (products.length === updatedProducts.length)
      throw new NotFoundException('product not found');

    await this.saveProducts(updatedProducts);
  }
}
