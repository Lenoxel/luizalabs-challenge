import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateClientDto } from './dto/createClient.dto';
import { UpdateClientDto } from './dto/updateClient.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Client)
        private clientsRepository: Repository<Client>,
    ) {}

    async getClients(): Promise<Client[]> {
        return this.clientsRepository.find();
    }

    async getClient(id: string): Promise<Client> {
        const clients = await this.clientsRepository.findOne(id);

        if (!clients) {
            throw new NotFoundException('Não existe um cliente com o id passado');
        }

        return clients;
    }

    async createClient(createClientDto: CreateClientDto): Promise<InsertResult> {
        const { email } = createClientDto;

        const alreadyExistsClient = await this.clientsRepository.findOne({ where: { email } });
        if (alreadyExistsClient) {
            throw new InternalServerErrorException(`Já existe um cliente cadastrado com o email passado`);
        }

        try {
            return await this.clientsRepository.insert(createClientDto);
        } catch (err) {
           throw new InternalServerErrorException(err.sqlMessage || err);
        }
    }

    async updateClient(id: string, updateClientDto: UpdateClientDto): Promise<UpdateResult> {
        const { email } = updateClientDto;

        const alreadyExistsClient = await this.clientsRepository.findOne({ where: { email } });
        if (alreadyExistsClient && alreadyExistsClient.id !== id) {
            throw new InternalServerErrorException(`Já existe um cliente cadastrado com o email passado`);
        }

        try {
            return await this.clientsRepository.update(id, updateClientDto);
        } catch (err) {
           throw new InternalServerErrorException(err.sqlMessage || err);
        }
    }

    async deleteClient(id: string): Promise<DeleteResult> {
        try {
            return await this.clientsRepository.delete(id);
        } catch (err) {
           throw new InternalServerErrorException(err.sqlMessage || err);
        }
    }
}
