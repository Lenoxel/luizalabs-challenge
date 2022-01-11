import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_user',
      database: 'users',
      port: 3306,
      username: 'root',
      password: 'root',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: false,
      migrationsRun: false,
      logging: ['warn', 'error'],
      cli: {
        migrationsDir: 'apps/user/src/migrations',
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
