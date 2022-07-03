import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  mongoose.set('debug', true);
  await app.listen(process.env.PORT);
}
bootstrap();
