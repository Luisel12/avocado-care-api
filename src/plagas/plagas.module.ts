import { Module } from '@nestjs/common';
import { PlagasService } from './plagas.service';
import { PlagasController } from './plagas.controller';

@Module({
  controllers: [PlagasController],
  providers: [PlagasService],
})
export class PlagasModule {}
