import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MapData } from 'src/map/schemas/map.schema';

export type PlaceDocument = Place & Document;

@Schema({ collection: 'place' })
export class Place {
  @Prop(Number)
  id: number;

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

  @Prop(Number)
  review: number;

  @Prop(String)
  naverMapUrl: string;

  @Prop(String)
  kakaoMapUrl: string;

  @Prop([Object])
  menu: Array<{
    menu: string;
    price: string | number;
  }>;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
