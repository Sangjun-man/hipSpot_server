import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MapService {
  constructor(private readonly httpService: HttpService) {}

  async getGeoCode(address: string): Promise<any> {
    // console.log('hihihihi this is map module');
    const response = await axios({
      method: 'GET',
      url: `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode`,
      params: {
        query: address,
      },
      headers: {
        'X-NCP-APIGW-API-KEY-ID': process.env.NAVER_MAP_CLIENT_ID,
        'X-NCP-APIGW-API-KEY': process.env.NAVER_MAP_CLIENT_SECRET,
      },
    });
    console.log('response', response.data);
    return response.data;
  }
}
