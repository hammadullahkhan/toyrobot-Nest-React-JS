import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;
  app.enableCors();
  await app.listen(PORT);
  Logger.log('API is running on http://localhost:${PORT}', 'Bootstrap');
}
bootstrap();