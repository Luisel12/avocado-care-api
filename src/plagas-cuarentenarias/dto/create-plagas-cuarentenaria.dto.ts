import { IsDate, IsString } from "class-validator";

export class CreatePlagasCuarentenariaDto {

    @IsString()
    id_Huerto: string;
    
    @IsString()
    id_Plagas: string;

    @IsDate()
    Fecha_Ocurre: Date|null;
}

