import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MapModule } from 'src/map/map.module';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';
import { Place, PlaceSchema } from './schemas/place.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Place.name, schema: PlaceSchema }]), MapModule],
  controllers: [PlaceController],
  providers: [PlaceService],
})
export class PlaceModule {}
