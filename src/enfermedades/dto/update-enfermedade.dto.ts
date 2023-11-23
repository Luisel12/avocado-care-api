import { PartialType } from '@nestjs/mapped-types';
import { CreateEnfermedadeDto } from './create-enfermedade.dto';

export class UpdateEnfermedadeDto extends PartialType(CreateEnfermedadeDto) {}
