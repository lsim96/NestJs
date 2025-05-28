import { SignOptions } from './../../node_modules/@types/jsonwebtoken/index.d';
import { ConfigService } from '@nestjs/config';
import { Inject, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'process';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    //Register the jwt module to be able to use the jwt service
    JwtModule.registerAsync({
      global: true,
      useFactory(configService: ConfigService) {
        return {
          secret: configService.get('ACCESS_TOKEN_SECRET'),
          signOptions: {
            expiresIn: '20m',
          },
        };
      },

      inject: [ConfigService],
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
