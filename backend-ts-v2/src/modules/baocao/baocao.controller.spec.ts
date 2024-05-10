import { Test, TestingModule } from '@nestjs/testing';
import { BaocaoController } from './baocao.controller';

describe('BaocaoController', () => {
  let controller: BaocaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaocaoController],
    }).compile();

    controller = module.get<BaocaoController>(BaocaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
