import { Test, TestingModule } from '@nestjs/testing';
import { HuertosController } from './huertos.controller';
import { HuertosService } from './huertos.service';

describe('HuertosController', () => {
  let controller: HuertosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HuertosController],
      providers: [HuertosService],
    }).compile();

    controller = module.get<HuertosController>(HuertosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
