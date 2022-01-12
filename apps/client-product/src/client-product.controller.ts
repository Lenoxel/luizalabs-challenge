import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'apps/auth/src/jwt-auth.guard';
import { ClientProductService } from './client-product.service';
import { CreateProductFavoriteDto } from './dto/createProductFavorite.dto';

@Controller('api/v1/products')
export class ClientProductController {
  constructor(private readonly clientProductService: ClientProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get('clients/:id')
  async getFavoriteProducts(@Param('id') clientId: string): Promise<any[]> {
    return await this.clientProductService.getProducts(clientId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createFavoriteProduct(@Body() createProductFavoriteDto: CreateProductFavoriteDto): Promise<any[]> {
    return await this.clientProductService.createFavoriteProduct(createProductFavoriteDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':productId/clients/:clientId')
  async deleteFavoriteProduct(@Param('productId') productId: string, @Param('clientId') clientId: string): Promise<any> {
    return await this.clientProductService.deleteFavoriteProduct(productId, clientId);
  }
}
