import { Test, TestingModule } from '@nestjs/testing';
import { NutrientesService } from './nutrientes.service';

describe('NutrientesService', () => {
  let service: NutrientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutrientesService],
    }).compile();

    service = module.get<NutrientesService>(NutrientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
