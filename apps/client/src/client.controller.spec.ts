import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';

describe('ClientController', () => {
  let clientController: ClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
    }).compile();

    clientController = module.get<ClientController>(ClientController);
  });

  it('should be defined', () => {
    expect(clientController).toBeDefined();
  });
});
