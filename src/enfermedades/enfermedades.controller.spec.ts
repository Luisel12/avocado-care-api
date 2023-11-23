import { Test, TestingModule } from '@nestjs/testing';
import { EnfermedadesController } from './enfermedades.controller';
import { EnfermedadesService } from './enfermedades.service';

describe('EnfermedadesController', () => {
  let controller: EnfermedadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnfermedadesController],
      providers: [EnfermedadesService],
    }).compile();

    controller = module.get<EnfermedadesController>(EnfermedadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
