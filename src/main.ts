import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  dotenv.config();
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  await app.listen(port || 3000, () => {
    console.log(`Server running succesfully on ${port}`);
  });
}
bootstrap();
