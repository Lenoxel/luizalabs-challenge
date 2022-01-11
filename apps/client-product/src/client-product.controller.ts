import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClientProductService } from './client-product.service';
import { CreateProductFavoriteDto } from './dto/createProductFavorite.dto';

@Controller('api/v1/products')
export class ClientProductController {
  constructor(private readonly clientProductService: ClientProductService) {}

  @Get('clients/:id')
  async getFavoriteProducts(@Param('id') clientId: string): Promise<any[]> {
    return await this.clientProductService.getProducts(clientId);
  }

  @Post()
  async createFavoriteProduct(@Body() createProductFavoriteDto: CreateProductFavoriteDto): Promise<any[]> {
    return await this.clientProductService.createFavoriteProduct(createProductFavoriteDto);
  }

  @Delete(':productId/clients/:clientId')
  async deleteFavoriteProduct(@Param('productId') productId: string, @Param('clientId') clientId: string): Promise<any> {
    return await this.clientProductService.deleteFavoriteProduct(productId, clientId);
  }
}
