import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductFavoriteDto {
    @IsNotEmpty()
    @IsString()
    clientId: string;
    
    @IsNotEmpty()
    @IsString()
    productId: string;
}