import { Test, TestingModule } from '@nestjs/testing';
import { PlagasController } from './plagas.controller';
import { PlagasService } from './plagas.service';

describe('PlagasController', () => {
  let controller: PlagasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlagasController],
      providers: [PlagasService],
    }).compile();

    controller = module.get<PlagasController>(PlagasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
