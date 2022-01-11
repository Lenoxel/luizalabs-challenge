import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'apps/user/src/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [    
    UserModule,    
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY, signOptions: {
        expiresIn: process.env.EXPIRESIN,
      },
    }),
  ], 
  providers: [
    AuthService,
    JwtStrategy
  ],  
  exports: [
    PassportModule, 
    JwtModule
  ],
})
export class AuthModule {}
