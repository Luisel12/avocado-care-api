import { PartialType } from '@nestjs/mapped-types';
import { CreatePlagasCuarentenariaDto } from './create-plagas-cuarentenaria.dto';

export class UpdatePlagasCuarentenariaDto extends PartialType(CreatePlagasCuarentenariaDto) {}
