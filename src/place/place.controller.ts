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

  @Get('/updateOneCoord')
  updateCoord(@Body() body: { address: string }) {
    const { address } = body;
    return this.PlaceService.updateOneCoord(address);
  }
  @Get('/:placeName')
  findOne(@Param('placeName') placeName: string) {
    return this.PlaceService.findOne(placeName);
  }
  // @Get('/updateAllCoord')
  // updateAllCoord() {
  //   return this.PlaceService.updateAllCoord();
  // }
}
