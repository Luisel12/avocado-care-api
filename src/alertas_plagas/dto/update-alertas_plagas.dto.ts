import { PartialType } from '@nestjs/mapped-types';
import { CreateAlertasPlagasDto } from './create-alertas_plagas.dto';

export class UpdateAlertasPlagasDto extends PartialType(CreateAlertasPlagasDto) {
    
}
