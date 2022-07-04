import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

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
