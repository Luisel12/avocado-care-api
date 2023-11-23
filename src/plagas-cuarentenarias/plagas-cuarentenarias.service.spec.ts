import { Test, TestingModule } from '@nestjs/testing';
import { PlagasCuarentenariasService } from './plagas-cuarentenarias.service';

describe('PlagasCuarentenariasService', () => {
  let service: PlagasCuarentenariasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlagasCuarentenariasService],
    }).compile();

    service = module.get<PlagasCuarentenariasService>(PlagasCuarentenariasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
