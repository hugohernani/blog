import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // TODO: Apply more security
  app.enableCors()

  await app.listen(process.env.EXPOSED_PORT || 3001)
}
bootstrap()
