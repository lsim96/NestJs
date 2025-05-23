import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASS'),
          database: configService.get('DB_NAME'),
          //ONLY USE IN DEVELOPMENT AS IT CAN DELETE OR MODIFY THE DATABASE
          synchronize: configService.get('ENVIORMENT') === 'DEV',
          // entities: [Product],
          autoLoadEntities: true,
        };
      },
    }),
  ],
})
export class DataBaseModule {}
