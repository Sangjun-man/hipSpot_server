import { Controller, Get, Query } from '@nestjs/common';
import { ImageProcessingService } from './ImageProcessing.service';

@Controller('/ImageProcessing')
export class ImageProcessingController {
  constructor(private readonly ImageProcessingService: ImageProcessingService) {}
  @Get('')
  async getBorderColor(@Query() query) {
    // const instaId = query.instaId;
    // const id = query.id;
    // console.log(query, 'ImageProcessingController : ', id || instaId);
    // const colorData = await this.ImageProcessingService.borderColor(id || instaId);
    // return colorData;
  }
  @Get('/updateAllBorder')
  async upadateAllBorder() {
    // const placeList = await this.PlaceService.findAll();
    // console.log(placeList);
    // try {
    //   placeList.forEach(async place => {
    //     const { id, instaId } = place;
    //     console.log('foreach:', instaId, id);
    //     const borderColor = await this.ImageProcessingService.upDateborderColor(instaId);
    //     console.log('borderColor : ', borderColor);
    //     // await this.PlaceService.updateOne({ instaId: instaId, borderColor: borderColor[0] });
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
  }
}
