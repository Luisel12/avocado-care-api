import { Module } from '@nestjs/common';
import { AlertasPlagasService } from './alertas_plagas.service';
import { AlertasPlagasController } from './alertas_plagas.controller';

@Module({
  controllers: [AlertasPlagasController],
  providers: [AlertasPlagasService],
})
export class AlertasPlagasModule {}
