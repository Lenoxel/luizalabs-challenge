import { Test, TestingModule } from '@nestjs/testing';
import { ClientProductController } from './client-product.controller';
import { ClientProductService } from './client-product.service';

describe('ClientProductController', () => {
  let clientProductController: ClientProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientProductController],
      providers: [ClientProductService],
    }).compile();

    clientProductController = app.get<ClientProductController>(ClientProductController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(clientProductController).toBeDefined();
    });
  });
});
