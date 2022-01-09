import { NestFactory } from '@nestjs/core';
import { ClientProductModule } from './client-product.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientProductModule);
  await app.listen(3001);
}
bootstrap();
