import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientProductService {
  private clientProductList: any[] = [
    {
        clientId: 1,
        clientName: 'Gabriel Lenon',
        clientEmail: 'glenonsilva@gmail.com',
        productId: '1bf0f365-fbdd-4e21-9786-da459d78dd1f',
        productTitle: 'Cadeira para Auto Iseos Bébé Confort Earth Brown'
    },
    {
        clientId: 1,
        clientName: 'Gabriel Lenon',
        clientEmail: 'glenonsilva@gmail.com',
        productId: '958ec015-cfcf-258d-c6df-1721de0ab6ea',
        productTitle: 'Moisés Dorel Windoo 1529'
    },
    {
        clientId: 1,
        clientName: 'Gabriel Lenon',
        clientEmail: 'glenonsilva@gmail.com',
        productId: '212d0f07-8f56-0708-971c-41ee78aadf2b',
        productTitle: 'The Walking Dead - Game of the Year Edition'
    },
  ];

  constructor() {}

  async getProducts(clientId: string): Promise<any[]> {
      const products = await this.clientProductList.filter(clientProduct => clientProduct.clientId === Number(clientId));

      if (!products) {
        throw new NotFoundException();
      }

      return products;
  }
}
