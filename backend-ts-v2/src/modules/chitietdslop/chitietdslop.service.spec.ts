import { Test, TestingModule } from '@nestjs/testing';
import { ChitietdslopService } from './chitietdslop.service';

describe('ChitietdslopService', () => {
  let service: ChitietdslopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChitietdslopService],
    }).compile();

    service = module.get<ChitietdslopService>(ChitietdslopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
