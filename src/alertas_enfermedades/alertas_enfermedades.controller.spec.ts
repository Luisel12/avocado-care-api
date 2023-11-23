import { Test, TestingModule } from '@nestjs/testing';
import { AlertasEnfermedadesController } from './alertas_enfermedades.controller';
import { AlertasEnfermedadesService } from './alertas_enfermedades.service';

describe('AlertasEnfermedadesController', () => {
  let controller: AlertasEnfermedadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlertasEnfermedadesController],
      providers: [AlertasEnfermedadesService],
    }).compile();

    controller = module.get<AlertasEnfermedadesController>(AlertasEnfermedadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
