import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallesNutrimentaleDto } from './create-detalles_nutrimentale.dto';
import { IsString, isString } from 'class-validator';

export class UpdateDetallesNutrimentaleDto extends PartialType(CreateDetallesNutrimentaleDto) {
   
    @IsString()
    _id?: string;
}
