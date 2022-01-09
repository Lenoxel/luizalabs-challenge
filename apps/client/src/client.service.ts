import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientService {
    private clients: any[] = [
        {
            id: 1,
            name: 'Gabriel Lenon',
            email: 'glenonsilva@gmail.com'
        },
        {
            id: 2,
            name: 'Felipe Silva',
            email: 'felipe.silva@gmail.com'
        },
        {
            id: 3,
            name: 'Rebeka Beatriz',
            email: 'rebeka.beatriz@gmail.com'
        }
    ];

    constructor() {}

    async getClients(): Promise<any[]> {
        return this.clients;
    }

    async getClient(id: number): Promise<any> {
        const clients = await this.clients.find(client => client.id === id);

        if (!clients) {
            throw new NotFoundException();
        }

        return clients;
    }
}
