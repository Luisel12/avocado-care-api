import { PartialType } from '@nestjs/mapped-types';
import { CreateNutrienteDto } from './create-nutriente.dto';

export class UpdateNutrienteDto extends PartialType(CreateNutrienteDto) {}
