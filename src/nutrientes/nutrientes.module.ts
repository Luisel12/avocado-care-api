import { Module } from '@nestjs/common';
import { NutrientesService } from './nutrientes.service';
import { NutrientesController } from './nutrientes.controller';

@Module({
  controllers: [NutrientesController],
  providers: [NutrientesService],
})
export class NutrientesModule {}
