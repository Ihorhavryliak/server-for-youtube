import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.DATABASE_MONGOOSE
      }),
    }),
    UserModule,
  ],
})
export class AppModule {}
