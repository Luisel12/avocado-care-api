import { IsString } from "class-validator";

export class CreateAlertasPlagasDto {

    @IsString()
    id_Plagas: string;

    @IsString()
    mensaje: string

    @IsString()
    descripcion: string;
}
