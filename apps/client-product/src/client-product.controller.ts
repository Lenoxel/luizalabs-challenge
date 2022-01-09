import { Controller, Get, Param } from '@nestjs/common';
import { ClientProductService } from './client-product.service';

@Controller('api/v1/products')
export class ClientProductController {
  constructor(private readonly clientProductService: ClientProductService) {}

  @Get('clients/:id')
  async getProducts(@Param('id') clientId: string): Promise<any[]> {
    return await this.clientProductService.getProducts(clientId);
  }
}
