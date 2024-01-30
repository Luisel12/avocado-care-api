import { PartialType } from '@nestjs/mapped-types';
import { CreatePlagasCuarentenariaDto } from './create-plagas-cuarentenaria.dto';
import { IsString } from 'class-validator';

export class UpdatePlagasCuarentenariaDto extends PartialType(CreatePlagasCuarentenariaDto) {
    @IsString()
    _id?: string;
}
