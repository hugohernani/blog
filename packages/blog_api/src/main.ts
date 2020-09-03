import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // TODO: Apply more security
  app.enableCors({
    origin: [
      'http://localhost:3000',
      `http://blog_frontend:${process.env.BLOG_FRONTEND_APP_EXPOSED_PORT}`,
    ],
  })

  await app.listen(process.env.EXPOSED_PORT || 3001)
}
bootstrap()
