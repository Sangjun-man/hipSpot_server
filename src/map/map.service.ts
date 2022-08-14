import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { PlaceService } from 'src/place/place.service';
import { Place } from 'src/place/schemas/place.schema';
import { GeoJSON, GeoJSONDocument } from './schemas/map.schema';

@Injectable()
export class MapService {
  constructor(
    private readonly HttpService: HttpService,
    private readonly PlaceService: PlaceService,
    @InjectModel(GeoJSON.name) private GeoJSONModel: Model<GeoJSONDocument>,
  ) {}

  async allUpdateCoord() {
    try {
      const placeListData: Array<Place> = await this.PlaceService.findAll();

      const refinedIdAndUrlPlaceList = placeListData.map(place => ({
        instaId: place.instaId,
        address: place.address,
      }));

      await this.updateCoord(refinedIdAndUrlPlaceList);
      return '업데이트완료';
    } catch (error) {
      console.error(error);
    }
  }

  async updateCoord(placeList: Array<{ instaId: string; address: string }>) {
    for (let i = 0; i < placeList.length; i++) {
      const { instaId, address } = placeList[i];
      const geoData = await this.getGeoCode(address).then(res => ({
        lng: res.addresses[0].x,
        lat: res.addresses[0].y,
      }));
      await this.PlaceService.updateOne({ instaId, mapData: { lat: geoData.lat, lng: geoData.lng } });
    }
  }

  async allUpdateGeoJSON() {
    try {
      const placeListData: Array<Place> = await this.PlaceService.findAll();
      for (let i = 0; i < placeListData.length; i++) {
        if (!placeListData[i].mapData) continue;
        const { instaId, id, borderColor = '' } = placeListData[i];
        const { lng, lat } = placeListData[i].mapData;
        const json: GeoJSON = {
          type: 'Feature',
          // instaId,
          geometry: {
            type: 'Point',
            coordinates: [lng, lat],
          },
          properties: {
            instaId,
            id: `${id}`,
            borderColor: `${borderColor}`,
          },
        };

        await this.GeoJSONModel.updateOne({ properties: { instaId } }, json, { upsert: true });
      }
      return '성공';
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async allGeoJSON() {
    return await this.GeoJSONModel.find();
  }

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
    // console.log('response', response.data);
    return response.data;
  }
}
