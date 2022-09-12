import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilterModule } from './filter/filter.module';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { MapModule } from './map/map.module';
import { ImageProcessingModule } from './imageProcessing/imageProcessing.module';

dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'production'
      ? '.production.env'
      : process.env.NODE_ENV === 'stage'
      ? '.stage.env'
      : '.development.env',
  ),
});

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(`${process.env.MONGO_URI}
    `),
    FilterModule,
    MapModule,
    ImageProcessingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
