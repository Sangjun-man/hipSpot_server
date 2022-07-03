import { Controller, Get } from '@nestjs/common';
import { FilterService } from './filter.service';
import { Filter } from './schemas/filter.schema';

@Controller('/filter')
export class FilterController {
  constructor(private readonly FilterService: FilterService) {}

  @Get()
  getHello(): Promise<Filter[]> {
    return this.FilterService.findAll();
  }
}
