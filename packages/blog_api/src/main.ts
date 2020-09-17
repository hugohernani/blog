import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: Apply more security
  app.enableCors({
    origin: ['http://localhost:3000', `http://blog_frontend:${process.env.BLOG_FRONTEND_APP_EXPOSED_PORT}`],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      skipMissingProperties: false,
      forbidUnknownValues: true,
    }),
  );

  await app.listen(process.env.EXPOSED_PORT || 3001);
}
bootstrap();
