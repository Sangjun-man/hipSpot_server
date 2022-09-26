import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceModule } from 'src/place/place.module';
import { ImageProcessingController } from './imageProcessing.controller';
import { ImageProcessingService } from './imageProcessing.service';
import { ImageProcessing, ImageProcessingSchema } from './schemas/imageProcessing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ImageProcessing.name, schema: ImageProcessingSchema }]),
    HttpModule,
    PlaceModule,
  ],
  controllers: [ImageProcessingController],
  providers: [ImageProcessingService],
  exports: [ImageProcessingService],
})
export class ImageProcessingModule {}
