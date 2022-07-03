import { Body, Controller, Get } from '@nestjs/common';
import { MapService } from './map.service';

@Controller('/map')
export class MapController {
  constructor(private readonly MapService: MapService) {}
  @Get('/coordUpload')
  coordUpload() {
    const str = '서울 성동구 서울숲길 55 1층';
    return this.MapService.getGeoCode(str);
  }
}
