import { Module } from '@nestjs/common';
import { EnfermedadesService } from './enfermedades.service';
import { EnfermedadesController } from './enfermedades.controller';

@Module({
  controllers: [EnfermedadesController],
  providers: [EnfermedadesService],
})
export class EnfermedadesModule {}
