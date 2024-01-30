import { PartialType } from '@nestjs/mapped-types';
import { CreateAlertasEnfermedadeDto } from './create-alertas_enfermedade.dto';
import { IsString } from 'class-validator';

export class UpdateAlertasEnfermedadeDto extends PartialType(CreateAlertasEnfermedadeDto) {
    @IsString()
    _id?: string;
}
