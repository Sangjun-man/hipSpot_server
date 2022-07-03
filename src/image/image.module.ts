import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PlaceModule } from 'src/place/place.module';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  imports: [HttpModule, PlaceModule],
  controllers: [ImageController],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
