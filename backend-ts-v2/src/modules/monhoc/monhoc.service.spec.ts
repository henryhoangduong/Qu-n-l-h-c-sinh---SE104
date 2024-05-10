import { Test, TestingModule } from '@nestjs/testing';
import { MonhocService } from './monhoc.service';

describe('MonhocService', () => {
  let service: MonhocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonhocService],
    }).compile();

    service = module.get<MonhocService>(MonhocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
