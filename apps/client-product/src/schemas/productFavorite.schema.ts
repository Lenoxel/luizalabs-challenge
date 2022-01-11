import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductFavoriteDocument = ProductFavorite & Document;

@Schema()
export class ProductFavorite {
  @Prop({ type: String, required: true })
  clientId: string;

  @Prop({ type: String, required: true })
  productId: string;

  @Prop({ type: String, required: true })
  productTitle: string;

  @Prop({ type: Number, required: true })
  productPrice: number;

  @Prop({ type: String, required: true })
  productImage: string;

  @Prop({ type: Number, required: false })
  productReviewScore: number;
}

export const ProductFavoriteSchema = SchemaFactory.createForClass(ProductFavorite);