import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type FilterDocument = Filter & Document;

export class Filter {
  @Prop([String])
  categories: string[];

  @Prop([String])
  items: string[];
}

export const FilterSchema = new mongoose.Schema(
  {
    categories: [String],
    items: [String],
  },
  { collection: 'filter' },
);
