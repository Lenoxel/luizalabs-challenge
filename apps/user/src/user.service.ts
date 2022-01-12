import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email } = createUserDto;

    const alreadyExistsClient = await this.usersRepository.findOne({
      where: { email },
    });
    if (alreadyExistsClient) {
      throw new InternalServerErrorException(
        `Já existe um usuário cadastrado com o email passado`,
      );
    }

    try {
      const user = new User();
      user.setUser(createUserDto);
      return await this.usersRepository.save(user);
    } catch (err) {
      throw new InternalServerErrorException(err.sqlMessage || err);
    }
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    try {
      return await this.usersRepository.delete(id);
    } catch (err) {
      throw new InternalServerErrorException(err.sqlMessage || err);
    }
  }
}
