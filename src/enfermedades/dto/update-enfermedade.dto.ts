import { PartialType } from '@nestjs/mapped-types';
import { CreateEnfermedadeDto } from './create-enfermedade.dto';
import { IsString } from 'class-validator';


export class UpdateEnfermedadeDto extends PartialType(CreateEnfermedadeDto) {
    @IsString()
    _id?: string;
}
