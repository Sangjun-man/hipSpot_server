import mongoose, { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Place, PlaceDocument } from './schemas/place.schema';
import { PlaceInfoDto } from './dto/place.dto';
import { filterData, mapFitCoord } from 'src/types';

@Injectable()
export class PlaceService {
  constructor(@InjectModel(Place.name) private placeModel: Model<PlaceDocument>) {}
  async findAll(): Promise<Place[]> {
    return this.placeModel.find({});
  }
  async findAllInMap(mapFitCoord: mapFitCoord): Promise<Place[]> {
    const { lt, gt } = mapFitCoord;
    return this.placeModel.find({
      lat: { $lt: lt.lat, $gt: gt.lat },
      lon: { $lt: lt.lon, $gt: gt.lon },
    });
  }
  async findFiltterd(filterData: filterData): Promise<Place[]> {
    return this.placeModel.find({ categories: [...filterData.categories], items: [...filterData.items] });
  }
  async findOne(name: string): Promise<Place[]> {
    return this.placeModel.find({ name });
  }
}
