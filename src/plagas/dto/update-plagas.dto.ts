import { PartialType } from '@nestjs/mapped-types';
import { CreatePlagasDto } from './create-plagas.dto';
import { IsString } from 'class-validator';

export class UpdatePlagasDto extends PartialType(CreatePlagasDto) {
    @IsString()
    _id?: string;
}
