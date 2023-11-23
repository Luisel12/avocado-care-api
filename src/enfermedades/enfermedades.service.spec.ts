import { Test, TestingModule } from '@nestjs/testing';
import { EnfermedadesService } from './enfermedades.service';

describe('EnfermedadesService', () => {
  let service: EnfermedadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnfermedadesService],
    }).compile();

    service = module.get<EnfermedadesService>(EnfermedadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
