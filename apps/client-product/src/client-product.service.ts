import { BadGatewayException, BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductFavoriteDto } from './dto/createProductFavorite.dto';
import { ProductFavorite, ProductFavoriteDocument } from './schemas/productFavorite.schema';

import axios from 'axios';
import { ProductFavoriteDto } from './dto/productFavorite.dto';

@Injectable()
export class ClientProductService {
  constructor(@InjectModel(ProductFavorite.name) private productFavoriteModel: Model<ProductFavoriteDocument>) {}

  async getProducts(clientId: string): Promise<ProductFavorite[]> {
    const products = await this.productFavoriteModel.find({ clientId }).exec();

    if (!products) {
      throw new NotFoundException();
    }

    return products;
  }

  async createFavoriteProduct(createProductFavoriteDto: CreateProductFavoriteDto): Promise<any> {
    const { productId, clientId } = createProductFavoriteDto;

    if (!productId || !clientId) {
      throw new BadRequestException('Objeto inválido');
    }

    const product = await this.productFavoriteModel.findOne({ productId, clientId });

    if (product) {
      throw new InternalServerErrorException('Esse produto já está na lista de favoritos do cliente');
    }

    try {
      const { data } = await axios.get(`http://challenge-api.luizalabs.com/api/product/${productId}/`);

      if (!data) {
        throw new BadGatewayException();
      }

      const { price: productPrice, image: productImage, title: productTitle, reviewScore: productReviewScore } = data;

      const productFavoriteDto = {
        clientId,
        productId,
        productTitle,
        productImage,
        productPrice,
        productReviewScore,
      } as ProductFavoriteDto;

      const productFavorite = new this.productFavoriteModel(productFavoriteDto);

      return await productFavorite.save();
    } catch (err) {
      throw new NotFoundException(err || 'Não existe um produto com os ids passados');
    }
  }

  async deleteFavoriteProduct(productId: string, clientId: string): Promise<any> {
    const deleteResponse = await this.productFavoriteModel.findOneAndDelete({ productId, clientId });
    
    if (!deleteResponse) {
      throw new NotFoundException('Não existe um produto com os ids passados');
    }

    return deleteResponse;
  }
}
