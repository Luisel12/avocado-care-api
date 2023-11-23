import { Test, TestingModule } from '@nestjs/testing';
import { DetallesNutrimentalesService } from './detalles_nutrimentales.service';

describe('DetallesNutrimentalesService', () => {
  let service: DetallesNutrimentalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallesNutrimentalesService],
    }).compile();

    service = module.get<DetallesNutrimentalesService>(DetallesNutrimentalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
