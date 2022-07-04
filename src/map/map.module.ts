import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PlaceModule } from 'src/place/place.module';
import { MapController } from './map.controller';
import { MapService } from './map.service';

@Module({
  imports: [HttpModule, PlaceModule],
  controllers: [MapController],
  providers: [MapService],
  exports: [MapService],
})
export class MapModule {}
