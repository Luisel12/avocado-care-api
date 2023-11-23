import { Test, TestingModule } from '@nestjs/testing';
import { PlagasCuarentenariasController } from './plagas-cuarentenarias.controller';
import { PlagasCuarentenariasService } from './plagas-cuarentenarias.service';

describe('PlagasCuarentenariasController', () => {
  let controller: PlagasCuarentenariasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlagasCuarentenariasController],
      providers: [PlagasCuarentenariasService],
    }).compile();

    controller = module.get<PlagasCuarentenariasController>(PlagasCuarentenariasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
