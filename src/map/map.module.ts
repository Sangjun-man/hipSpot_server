import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageProcessingModule } from 'src/imageProcessing/imageProcessing.module';
import { PlaceModule } from 'src/place/place.module';
import { MapController } from './map.controller';
import { MapService } from './map.service';
import { GeoJSON, GeoJSONSchema, MapData, MapDataSchema } from './schemas/map.schema';

@Module({
  imports: [
    HttpModule,
    PlaceModule,
    ImageProcessingModule,
    MongooseModule.forFeature([{ name: MapData.name, schema: MapDataSchema }]),
    MongooseModule.forFeature([{ name: GeoJSON.name, schema: GeoJSONSchema }]),
  ],
  controllers: [MapController],
  providers: [MapService],
  exports: [MapService],
})
export class MapModule {}
