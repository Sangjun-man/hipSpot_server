import { BadRequestException, Controller, Get, Param, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return '123123';
  }
  @Get('/param/:parameter')
  getReqObj(@Req() req: Request): string {
    console.log(req.params);
    return `${req.params.param}`;
  }
  @Get('/query')
  getReqObjQuery(@Req() req: Request): string {
    console.log(req.query);
    return `${req.query.id}`;
  }
  @Get('/qr')
  getQuery(@Query('qr') qr: string): string {
    console.log(qr);
    return `${qr}`;
  }
  @Get('/qrobj')
  getQueryObj(@Query() query: object): string {
    console.log(query);
    for (const queryKey of Object.keys(query)) {
      console.log(`${queryKey}: ${query[queryKey]}`);
    }
    return 'qrobj';
  }
  @Get('/hello2')
  getHello2(): string {
    return this.appService.getHello2();
  }

  @Get('/id/:id')
  findOne(@Param('id') id: string) {
    if (+id < 1) {
      throw new BadRequestException('id는 0보다 큰 값이어야 합니다.');
    }
    return this.appService.findOne(+id);
  }
  @Get('redirect/docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    console.log(version);
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
