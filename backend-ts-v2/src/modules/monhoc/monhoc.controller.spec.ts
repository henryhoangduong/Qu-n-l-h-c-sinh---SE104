import { Test, TestingModule } from '@nestjs/testing';
import { MonhocController } from './monhoc.controller';

describe('MonhocController', () => {
  let controller: MonhocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonhocController],
    }).compile();

    controller = module.get<MonhocController>(MonhocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
