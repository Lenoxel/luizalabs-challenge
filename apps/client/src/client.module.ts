import { Global, Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { AuthModule } from 'apps/auth/src/auth.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_client',
      database: 'clients',
      port: 3306,
      username: 'root',
      password: 'root',
      entities: [Client],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: false,
      migrationsRun: false,
      logging: ['warn', 'error'],
      cli: {
        migrationsDir: 'apps/client/src/migrations'
      }
    }),
    TypeOrmModule.forFeature([Client]),
    AuthModule,
  ],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
