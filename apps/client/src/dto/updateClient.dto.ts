import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateClientDto {
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    email: string;
}