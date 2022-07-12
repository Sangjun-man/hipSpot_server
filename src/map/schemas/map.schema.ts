import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type GeoJSONDocument = GeoJSON & Document;

export type MapDataType = {
  lat: number;
  lng: number;
};
export class MapData {
  @Prop({ type: { lat: Number, lng: Number } })
  lat: number;
  lng: number;
}

export const MapDataSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
});
@Schema({ collection: 'geojson' })
export class GeoJSON {
  // @Prop(String)
  // instaId: string;

  @Prop(String)
  type: string;

  @Prop({ type: Object, coordinates: [Number] })
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  @Prop({ type: Object, properties: Object })
  properties: {
    [k: string]: string;
  };
}

export const GeoJSONSchema = SchemaFactory.createForClass(GeoJSON);
