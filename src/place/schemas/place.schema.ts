import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type PlaceDocument = Place & Document;

export class Place {
  @Prop(String)
  id: string;

  @Prop(String)
  placeName: string;

  @Prop([String])
  categories: string[];

  @Prop([String])
  items: string[];

  @Prop(String)
  address: string;

  @Prop(String)
  contactNum: string;

  @Prop(String)
  instagramId: string;

  @Prop(String)
  description: string;

  @Prop(Boolean)
  parking: boolean;

  @Prop([String])
  businessDay: string[];

  @Prop(String)
  businessTime: string;
}

export const PlaceSchema = new mongoose.Schema(
  {
    id: String,
    placeName: String,
    categories: [String],
    items: [String],
    address: String,
    contactNum: String,
    instagramId: String,
    description: String,
    parking: Boolean,
    businessDay: [String],
    businessTime: String,
  },
  { collection: 'place' },
);
