import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { PlaceService } from 'src/place/place.service';
import { ImageService } from './image.service';

@Controller('/image')
export class ImageController {
  constructor(private readonly ImageService: ImageService, private readonly PlaceService: PlaceService) {}
  @Get('')
  async getBorderColor(@Query() query) {
    // const instaId = query.instaId;
    // const id = query.id;
    // console.log(query, 'imageController : ', id || instaId);
    // const colorData = await this.ImageService.borderColor(id || instaId);
    // return colorData;
  }
  @Get('/updateAllBorder')
  async upadateAllBorder() {
    const placeList = await this.PlaceService.findAll();
    console.log(placeList);

    try {
      placeList.forEach(async place => {
        const { id, instaId } = place;
        console.log('foreach:', instaId, id);
        const borderColor = await this.ImageService.upDateborderColor(instaId);
        console.log('borderColor : ', borderColor);
        // await this.PlaceService.updateOne({ instaId: instaId, borderColor: borderColor[0] });
      });
    } catch (e) {
      console.log(e);
    }
  }
}
