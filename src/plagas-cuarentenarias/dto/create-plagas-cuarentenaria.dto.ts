import { IsDate, IsDateString, IsString } from "class-validator";

export class CreatePlagasCuarentenariaDto {

    @IsString()
    id_Huerto: string;

    @IsString()
    id_Plagas: string;

    @IsDateString()
    Fecha_Ocurre: Date|null;
}

