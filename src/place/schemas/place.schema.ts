import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { MapData } from 'src/map/schemas/map.schema';

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
  instaId: string;

  @Prop(String)
  description: string;

  @Prop(Boolean)
  parking: boolean;

  @Prop([String])
  businessDay: string[];

  @Prop(String)
  businessTime: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Mapdata' })
  mapData: MapData;
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
