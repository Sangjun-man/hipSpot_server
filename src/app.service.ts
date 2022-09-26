import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHello2(): string {
    return 'helllllllll1';
  }
  getReqObj(req: Request): string {
    console.log(req);
    return `req`;
  }
  findOne(id: number): string {
    return `${id}`;
  }
}
