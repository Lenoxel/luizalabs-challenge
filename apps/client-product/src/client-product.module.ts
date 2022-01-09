import { Module } from '@nestjs/common';
import { ClientProductController } from './client-product.controller';
import { ClientProductService } from './client-product.service';

@Module({
  imports: [],
  controllers: [ClientProductController],
  providers: [ClientProductService],
})
export class ClientProductModule {}
