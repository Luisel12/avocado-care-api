import { Test, TestingModule } from '@nestjs/testing';
import { AlertasPlagasController } from './alertas_plagas.controller';
import { AlertasPlagasService } from './alertas_plagas.service';

describe('AlertasPlagasController', () => {
  let controller: AlertasPlagasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlertasPlagasController],
      providers: [AlertasPlagasService],
    }).compile();

    controller = module.get<AlertasPlagasController>(AlertasPlagasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
