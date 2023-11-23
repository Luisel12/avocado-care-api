import { PartialType } from '@nestjs/mapped-types';
import { CreatePlagasDto } from './create-plagas.dto';

export class UpdatePlagasDto extends PartialType(CreatePlagasDto) {}
