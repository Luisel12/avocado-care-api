import { IsDate, IsString } from "class-validator";

export class CreateDetallesNutrimentaleDto {

    @IsString()
    id_Nutrimentales: string;

    @IsString()
    id_Huerto: string;

    @IsString()
    id_infonutri: string;

    @IsDate()
    Fecha: Date;
}
