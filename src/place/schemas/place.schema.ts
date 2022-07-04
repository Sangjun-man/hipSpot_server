import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { MapData, MapDataSchema } from 'src/map/schemas/map.schema';

export type PlaceDocument = Place & Document;

// export type PlaceType = {
//   placeName: string;
//   categories: string[];
//   items: string[];
//   address: string;
//   contactNum: string;
//   instaId: string;
//   description: string;
//   businessDay: string[];
//   borderColor: string;
//   review: number;
//   mapData: MapData;
// };

export class Place {
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

  @Prop([String])
  businessDay: string[];

  @Prop(String)
  borderColor: string;

  @Prop(Number)
  review: number;

  @Prop(String)
  naverMapUrl: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Mapdata' })
  mapData: MapData;
}

export const PlaceSchema = new mongoose.Schema(
  {
    placeName: String,
    categories: [String],
    items: [String],
    address: String,
    contactNum: String,
    instaId: String,
    description: String,
    businessDay: [String],
    borderColor: String,
    review: Number,
    mapData: MapDataSchema,
  },
  { collection: 't_place' },
);
