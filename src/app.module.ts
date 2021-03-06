import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceModule } from './place/place.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/hipspot'), PlaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
