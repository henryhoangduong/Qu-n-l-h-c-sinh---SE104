import { Test, TestingModule } from '@nestjs/testing';
import { BaocaoService } from './baocao.service';

describe('BaocaoService', () => {
  let service: BaocaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaocaoService],
    }).compile();

    service = module.get<BaocaoService>(BaocaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
