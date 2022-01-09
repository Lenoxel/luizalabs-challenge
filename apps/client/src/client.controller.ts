import { Controller, Get, Param } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('api/v1/clients')
export class ClientController {
    constructor(
        public clientService: ClientService,
    ) {}

    @Get()
    async getClients(): Promise<any[]> {
        return await this.clientService.getClients();
    }

    @Get(':id')
    async getClient(@Param('id') id: number): Promise<any> {
       return await this.clientService.getClient(id);
    }

    // @Post()
    // async createWinner(@Body() createWinnerDTO: CreateWinnerDTO, @Headers('authorization') authorization: string): Promise<Winner> {
    //     const winner = await this.service.createWinner(createWinnerDTO, authorization);
    //     return winner;
    // }

    // @Put(':id')
    // async updateWinner(@Param('id') id: string, @Body() createWinnerDTO: CreateWinnerDTO, @Headers('authorization') authorization: string): Promise<Winner> {
    //     const updatedWinner = await this.service.updateWinner(id, createWinnerDTO, authorization);
    //     return updatedWinner;
    // }

    // @Delete(':id')
    // async deleteWinner(@Param('id') id: string, @Headers('authorization') authorization: string): Promise<DeleteResult> {
    //     const deletedWinner = await this.service.deleteWinner(id, authorization);
    //     return deletedWinner;
    // }
}
