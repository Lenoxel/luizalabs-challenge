import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    id: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}