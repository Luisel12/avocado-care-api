import { Test, TestingModule } from '@nestjs/testing';
import { DetallesNutrimentalesController } from './detalles_nutrimentales.controller';
import { DetallesNutrimentalesService } from './detalles_nutrimentales.service';

describe('DetallesNutrimentalesController', () => {
  let controller: DetallesNutrimentalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallesNutrimentalesController],
      providers: [DetallesNutrimentalesService],
    }).compile();

    controller = module.get<DetallesNutrimentalesController>(DetallesNutrimentalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
