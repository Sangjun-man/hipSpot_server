import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type MapDataType = {
  lat: number;
  lon: number;
};
export class MapData {
  @Prop({ type: { lat: Number, lon: Number } })
  lat: number;
  lon: number;
}

export const MapDataSchema = new mongoose.Schema({
  lat: Number,
  lon: Number,
});
