import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MapService } from './map.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [MapService],
  exports: [MapService],
})
export class MapModule {}
