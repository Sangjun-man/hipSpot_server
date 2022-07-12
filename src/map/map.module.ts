import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceModule } from 'src/place/place.module';
import { MapController } from './map.controller';
import { MapService } from './map.service';
import { GeoJSON, GeoJSONSchema } from './schemas/map.schema';

@Module({
  imports: [HttpModule, PlaceModule, MongooseModule.forFeature([{ name: GeoJSON.name, schema: GeoJSONSchema }])],
  controllers: [MapController],
  providers: [MapService],
  exports: [MapService],
})
export class MapModule {}
