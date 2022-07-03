import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('/image')
export class ImageController {
  constructor(private readonly ImageService: ImageService) {}
  @Get('')
  async getBorderColor(@Query() query) {
    const instaId = query.id;
    const colorData = await this.ImageService.borderColor(instaId);
    return colorData;
  }
}
