import { IsDate, IsString } from "class-validator";

export class CreateAlertasEnfermedadeDto {
    
    @IsString()
    id_Huerto: string;

    @IsString()
    id_Enfermedades: string;


    @IsDate()
    Fecha_Alert: Date|null;
}
