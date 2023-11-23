import { Module } from '@nestjs/common';
import { DetallesNutrimentalesService } from './detalles_nutrimentales.service';
import { DetallesNutrimentalesController } from './detalles_nutrimentales.controller';

@Module({
  controllers: [DetallesNutrimentalesController],
  providers: [DetallesNutrimentalesService],
})
export class DetallesNutrimentalesModule {}
