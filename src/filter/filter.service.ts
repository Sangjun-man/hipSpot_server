import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Filter, FilterDocument } from './schemas/filter.schema';

@Injectable()
export class FilterService {
  constructor(@InjectModel(Filter.name) private filterModel: Model<FilterDocument>) {}

  async findAll(): Promise<Filter[]> {
    console.log(this);
    console.log(this.filterModel);
    console.log(await this.filterModel.find({}));
    return this.filterModel.findOne({});
  }
}
