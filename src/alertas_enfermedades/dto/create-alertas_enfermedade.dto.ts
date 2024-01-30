import { IsDate, IsDateString, IsString } from "class-validator";

export class CreateAlertasEnfermedadeDto {

    @IsString()
    id_Huerto: string;

    @IsString()
    id_Enfermedades: string;


    @IsDateString()
    Fecha_Alert: Date|null;
}
