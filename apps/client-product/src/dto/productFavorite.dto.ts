import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductFavoriteDto {
    @IsNotEmpty()
    @IsString()
    clientId: string;
    
    @IsNotEmpty()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    productTitle: string;

    @IsNotEmpty()
    @IsNumber()
    productPrice: number;

    @IsNotEmpty()
    @IsString()
    productImage: string;

    @IsNumber()
    productReviewScore?: number;
}