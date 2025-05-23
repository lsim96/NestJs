import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserAddressModule } from './user-address/user-address.module';
import { OrdersModule } from './orders/orders.module';
import { config } from 'process';
import { UsersModule } from './users/users.module';
import { DataBaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    DataBaseModule,
    ProductsModule,
    UsersModule,
    UserAddressModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
