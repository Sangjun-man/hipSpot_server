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
    const slowlyUpdate = async ({ start, end }: { start: number; end: number }) => {
      try {
        for (let i = start; i < end; i++) {
          if (!placeList[i]) break;
          if (start > end) return console.log('숫자확인좀요');
          const place = placeList[i];
          const { id, instaId } = place;
          console.log('이미지프로세싱, 보더 업데이트중 id:', instaId, id);
          await this.ImageProcessingService.upDateborderColor(instaId);
        }
      } catch (e) {
        console.log(e);
      }
    };

    await slowlyUpdate({ start: 0, end: 20 });
    await slowlyUpdate({ start: 21, end: 40 });
    await slowlyUpdate({ start: 41, end: 60 });
    await slowlyUpdate({ start: 61, end: 80 });
    await slowlyUpdate({ start: 81, end: 100 });
    await slowlyUpdate({ start: 101, end: 120 });
    await slowlyUpdate({ start: 121, end: 140 });
  }
}
