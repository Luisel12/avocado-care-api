import { Test, TestingModule } from '@nestjs/testing';
import { JwtvalidatorService } from './jwtvalidator.service';

describe('JwtvalidatorService', () => {
  let service: JwtvalidatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtvalidatorService],
    }).compile();

    service = module.get<JwtvalidatorService>(JwtvalidatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
