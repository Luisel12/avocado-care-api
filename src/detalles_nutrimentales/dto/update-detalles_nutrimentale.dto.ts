import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallesNutrimentaleDto } from './create-detalles_nutrimentale.dto';

export class UpdateDetallesNutrimentaleDto extends PartialType(CreateDetallesNutrimentaleDto) {}
