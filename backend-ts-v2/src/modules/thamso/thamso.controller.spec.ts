import { Test, TestingModule } from '@nestjs/testing';
import { ThamsoController } from './thamso.controller';

describe('ThamsoController', () => {
  let controller: ThamsoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThamsoController],
    }).compile();

    controller = module.get<ThamsoController>(ThamsoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
