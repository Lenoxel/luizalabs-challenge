import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from 'apps/user/src/dto/loginUser.dto';
import { AuthService } from './auth.service';

@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(
      @Body() loginUserDto: LoginUserDto,
    ): Promise<{ accessToken: string }> {
      return await this.authService.login(loginUserDto);
    }

}
