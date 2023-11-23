import { PartialType } from '@nestjs/mapped-types';
import { CreateHuertoDto } from './create-huerto.dto';

export class UpdateHuertoDto extends PartialType(CreateHuertoDto) {}
