import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Place, PlaceDocument } from './schemas/place.schema';
import { filterData, mapFitCoord } from 'src/types';

@Injectable()
export class PlaceService {
  constructor(@InjectModel(Place.name) private placeModel: Model<PlaceDocument>) {}

  async findAll(): Promise<Place[]> {
    return await this.placeModel.find({});
  }
  async findAllInMap(mapFitCoord: mapFitCoord): Promise<Place[]> {
    const { lt, gt } = mapFitCoord;
    return this.placeModel.find({
      lat: { $lt: lt.lat, $gt: gt.lat },
      lng: { $lt: lt.lng, $gt: gt.lng },
    });
  }
  async findFiltterd(filterData: filterData): Promise<Place[]> {
    const findFiltered = this.placeModel.find({
      $or: [{ categories: { $all: [...filterData.categories] } }, { items: { $in: [...filterData.items] } }],
    });
    return findFiltered;
  }
  async findOne(id: string): Promise<Place> {
    return await this.placeModel.findOne({ instaId: id });
    // return a;
  }
  async updateOne(updateValue) {
    console.log('업데이트 시작');
    try {
      const { instaId } = updateValue;
      console.log(await this.placeModel.updateOne({ instaId: instaId }, { $set: { ...updateValue } }));
    } catch (error) {
      console.log(error);
    }
  }
}
