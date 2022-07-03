import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilterController } from './filter.contorller';
import { FilterService } from './filter.service';
import { Filter, FilterSchema } from './schemas/filter.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Filter.name, schema: FilterSchema }]), HttpModule],
  controllers: [FilterController],
  providers: [FilterService],
  exports: [FilterService],
})
export class FilterModule {}
