import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class MapData {
  @Prop(String)
  naverMapUrl: string;

  @Prop({ lat: Number, lng: Number })
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const MapDataSchema = new mongoose.Schema({
  naverMapUrl: String,
  coordinates: {
    lat: Number,
    lng: Number,
  },
});
