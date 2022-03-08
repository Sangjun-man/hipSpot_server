import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class MapData {
  @Prop(String)
  naverMapUrl: string;

  @Prop({ type: { coordinate: { lat: Number, lon: Number } } })
  coordinate: {
    lat: number;
    lon: number;
  };
}

export const MapDataSchema = new mongoose.Schema({
  naverMapUrl: String,
  coordinate: {
    lat: Number,
    lon: Number,
  },
});
