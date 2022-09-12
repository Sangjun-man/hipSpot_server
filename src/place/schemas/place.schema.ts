import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MapData } from 'src/map/schemas/map.schema';

export type PlaceDocument = Place & Document;

@Schema({ collection: 'tt_place' })
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

  @Prop([Object])
  borderColor: Array<{
    clusterOrder: number;
    hex: string;
    color: string;
    stroke: string;
    lightNess: number;
    gray: string;
  }>;

  @Prop([String])
  fontColorData: string[];

  @Prop(Number)
  review: number;

  @Prop(String)
  naverMapUrl: string;

  @Prop(String)
  kakaoMapUrl: string;

  @Prop(Object)
  mapData: MapData;

  @Prop([Object])
  menu: Array<{
    menu: string;
    price: string | number;
  }>;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
