import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { filterData, mapFitCoord } from 'src/types';
import { PlaceService } from './place.service';

@Controller('/place')
export class PlaceController {
  constructor(private readonly PlaceService: PlaceService) {}
  @Get('/all')
  findall() {
    return this.PlaceService.findAll();
  }
  @Post('/map')
  findAllInMap(@Body() mapFitCoord: mapFitCoord) {
    return this.PlaceService.findAllInMap(mapFitCoord);
  }
  @Post('/filter')
  findFiltterd(@Body() filterData: filterData) {
    console.log(filterData); // json
    return this.PlaceService.findFiltterd(filterData);
  }

  @Get('/:placeId')
  findOne(@Param('placeId') placeName: string) {
    console.log(placeName);
    return this.PlaceService.findOne(placeName);
  }
}
