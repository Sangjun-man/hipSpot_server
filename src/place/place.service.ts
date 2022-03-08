import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Place, PlaceDocument } from './schemas/place.schema';
import { filterData, mapFitCoord } from 'src/types';
import { MapService } from 'src/map/map.service';

@Injectable()
export class PlaceService {
  constructor(
    @InjectModel(Place.name) private placeModel: Model<PlaceDocument>,
    private readonly mapService: MapService,
  ) {}

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
    const findFiltered = this.placeModel.find({
      $or: [{ categories: { $all: [...filterData.categories] } }, { items: { $in: [...filterData.items] } }],
    });
    return findFiltered;
  }
  async findOne(placeName: string): Promise<Place[]> {
    const findOne = this.placeModel.find({ placeName: placeName });
    return findOne;
  }
  async updateOneCoord(address: string) {
    const geoData = await this.mapService.getGeoCode(address);
    const { x, y } = geoData.addresses[0];
    // console.log(address);
    // console.log(x, y, roadAddress);
    return { lat: x, lon: y };
    // return await this.placeModel.updateMany({}, { $set: { mapData: { lat: x, lon: y } } ,false ,true });
  }
  // async updateAllCoord() {
  //   try {
  //     return 'success!';
  //   } catch (e) {
  //     return e;
  //   }
  // }
}
