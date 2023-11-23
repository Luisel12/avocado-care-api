import { Test, TestingModule } from '@nestjs/testing';
import { AlertasPlagasService } from './alertas_plagas.service';

describe('AlertasPlagasService', () => {
  let service: AlertasPlagasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlertasPlagasService],
    }).compile();

    service = module.get<AlertasPlagasService>(AlertasPlagasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
