import { Test, TestingModule } from '@nestjs/testing';
import { HuertosService } from './huertos.service';

describe('HuertosService', () => {
  let service: HuertosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HuertosService],
    }).compile();

    service = module.get<HuertosService>(HuertosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
