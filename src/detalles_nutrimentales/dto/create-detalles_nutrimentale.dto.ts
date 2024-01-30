import { IsDate, IsDateString, IsString } from "class-validator";

export class CreateDetallesNutrimentaleDto {

    @IsString()
    id_Nutrientes: string;

    @IsString()
    id_Huerto: string;

    @IsString()
    id_infonutri: string;

    @IsDateString()
    Fecha: Date;
}
