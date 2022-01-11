import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/createClient.dto';
import { UpdateClientDto } from './dto/updateClient.dto';
import { Client } from './entities/client.entity';

@Controller('api/v1/clients')
export class ClientController {
    constructor(
        public clientService: ClientService,
    ) {}

    @Get()
    async getClients(): Promise<Client[]> {
        return await this.clientService.getClients();
    }

    @Get(':id')
    async getClient(@Param('id') id: string): Promise<Client> {
       return await this.clientService.getClient(id);
    }

    @Post()
    async createClient(@Body() createClientDto: CreateClientDto): Promise<InsertResult> {
        return await this.clientService.createClient(createClientDto);
    }

    @Put(':id')
    async updateClient(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto): Promise<UpdateResult> {
        return await this.clientService.updateClient(id, updateClientDto);
    }

    @Delete(':id')
    async deleteClient(@Param('id') id: string): Promise<DeleteResult> {
        return await this.clientService.deleteClient(id);
    }
}
