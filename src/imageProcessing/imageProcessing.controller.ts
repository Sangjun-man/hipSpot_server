import { Controller, Get, Query } from '@nestjs/common';
import { PlaceService } from 'src/place/place.service';
import { ImageProcessingService } from './imageProcessing.service';

@Controller('/ImageProcessing')
export class ImageProcessingController {
  constructor(
    private readonly PlaceService: PlaceService,
    private readonly ImageProcessingService: ImageProcessingService,
  ) {}
  @Get('/getBorderColor')
  async getBorderColor(@Query('instaId') query: { instaId: string; id: number | undefined }) {
    const instaId = query.instaId;
    const id = query.id;
    console.log(query, 'ImageProcessingController : ', id || instaId);
    const colorData = await this.ImageProcessingService.findOne(instaId);
    return colorData;
  }
  @Get('/updateAllBorder')
  async upadateAllBorder() {
    const placeList = await this.PlaceService.findAll();
    console.log(placeList);
    try {
      placeList.forEach(async place => {
        const { id, instaId } = place;
        console.log('이미지프로세싱, 보더 업데이트중 id:', instaId, id);
        await this.ImageProcessingService.upDateborderColor(instaId);
      });
    } catch (e) {
      console.log(e);
    }
  }
}
