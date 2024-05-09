import { Test, TestingModule } from '@nestjs/testing';
import { ThamsoService } from './thamso.service';

describe('ThamsoService', () => {
  let service: ThamsoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThamsoService],
    }).compile();

    service = module.get<ThamsoService>(ThamsoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
