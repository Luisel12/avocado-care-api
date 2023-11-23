import { Module } from '@nestjs/common';
import { AlertasEnfermedadesService } from './alertas_enfermedades.service';
import { AlertasEnfermedadesController } from './alertas_enfermedades.controller';

@Module({
  controllers: [AlertasEnfermedadesController],
  providers: [AlertasEnfermedadesService],
})
export class AlertasEnfermedadesModule {}
