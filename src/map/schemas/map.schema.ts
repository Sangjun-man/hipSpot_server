import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GeoJSONDocument = GeoJSON & Document;
export type MapdataDocument = MapData & Document;

@Schema({ collection: 'mapData' })
export class MapData {
  @Prop({ type: { lat: Number, lng: Number } })
  lat: number;
  lng: number;

  @Prop(String)
  instaId: string;

  @Prop(Number)
  id: number;
}

@Schema({ collection: 'geojson' })
export class GeoJSON {
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
export const MapDataSchema = SchemaFactory.createForClass(MapData);
