import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientProductController } from './client-product.controller';
import { ClientProductService } from './client-product.service';
import { ProductFavorite, ProductFavoriteSchema } from './schemas/productFavorite.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb_product:27017/products'),
    MongooseModule.forFeature([{ name: ProductFavorite.name, schema: ProductFavoriteSchema }])
  ],
  controllers: [
    ClientProductController
  ],
  providers: [
    ClientProductService
  ],
})
export class ClientProductModule {}
