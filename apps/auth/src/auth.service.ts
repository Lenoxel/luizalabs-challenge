import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'apps/user/src/dto/loginUser.dto';
import { User } from 'apps/user/src/entities/user.entity';
import { UserService } from 'apps/user/src/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const user = await this.validateUser(loginUserDto);

    const payload = {
      userId: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(loginUserDto: LoginUserDto): Promise<User> {
    const { email, password } = loginUserDto;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException();
    }

    const validatePassword = await user.validatePassword(password);

    if (!validatePassword) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
