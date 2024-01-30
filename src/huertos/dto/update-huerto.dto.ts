import { PartialType } from '@nestjs/mapped-types';
import { CreateHuertoDto } from './create-huerto.dto';
import { IsString } from 'class-validator';

export class UpdateHuertoDto extends PartialType(CreateHuertoDto) {
    @IsString()
    _id?: string;
}
