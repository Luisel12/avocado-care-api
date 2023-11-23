import { Test, TestingModule } from '@nestjs/testing';
import { AlertasEnfermedadesService } from './alertas_enfermedades.service';

describe('AlertasEnfermedadesService', () => {
  let service: AlertasEnfermedadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlertasEnfermedadesService],
    }).compile();

    service = module.get<AlertasEnfermedadesService>(AlertasEnfermedadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
