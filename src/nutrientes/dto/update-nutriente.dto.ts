import { PartialType } from '@nestjs/mapped-types';
import { CreateNutrienteDto } from './create-nutriente.dto';
import { IsString } from 'class-validator';

export class UpdateNutrienteDto extends PartialType(CreateNutrienteDto) {
    @IsString()
    _id?: string;
}
