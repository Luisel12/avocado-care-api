import { PartialType } from '@nestjs/mapped-types';
import { CreateAlertasEnfermedadeDto } from './create-alertas_enfermedade.dto';

export class UpdateAlertasEnfermedadeDto extends PartialType(CreateAlertasEnfermedadeDto) {}
