import { Test, TestingModule } from '@nestjs/testing';
import { PlagasService } from './plagas.service';

describe('PlagasService', () => {
  let service: PlagasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlagasService],
    }).compile();

    service = module.get<PlagasService>(PlagasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
