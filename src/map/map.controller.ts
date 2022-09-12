import { Body, Controller, Get } from '@nestjs/common';
import { MapService } from './map.service';

@Controller('/map')
export class MapController {
  constructor(private readonly MapService: MapService) {}
  @Get('/allUpdateCoord')
  allUpdateCoord() {
    return this.MapService.allUpdateCoord();
  }

  @Get('/allUpdateGeoJSON')
  allUpdateGeoJSON() {
    return this.MapService.allUpdateGeoJSON();
  }
  @Get('/GeoJson')
  geoJSON() {
    return this.MapService.allGeoJSON();
  }
}
