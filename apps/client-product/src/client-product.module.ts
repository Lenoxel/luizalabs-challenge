import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'apps/auth/src/auth.module';
import { ClientProductController } from './client-product.controller';
import { ClientProductService } from './client-product.service';
import { ProductFavorite, ProductFavoriteSchema } from './schemas/productFavorite.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb_product:27017/products'),
    MongooseModule.forFeature([{ name: ProductFavorite.name, schema: ProductFavoriteSchema }]),
    AuthModule,
  ],
  controllers: [
    ClientProductController
  ],
  providers: [
    ClientProductService
  ],
})
export class ClientProductModule {}
