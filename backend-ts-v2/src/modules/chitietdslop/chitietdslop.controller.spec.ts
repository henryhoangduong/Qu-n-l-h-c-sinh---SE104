import { Test, TestingModule } from '@nestjs/testing';
import { ChitietdslopController } from './chitietdslop.controller';

describe('ChitietdslopController', () => {
  let controller: ChitietdslopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChitietdslopController],
    }).compile();

    controller = module.get<ChitietdslopController>(ChitietdslopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
