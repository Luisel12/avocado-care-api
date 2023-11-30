import { IsLatitude, IsLongitude, IsString } from "class-validator";

export class CreateHuertoDto {

    @IsString()
    id_Usuario: string;

    @IsString()
    Nombre: string;

    @IsLatitude()
    Latitud: number;

    @IsLongitude()
    Longitud: number;

    @IsString()
    Tipo_Suelo: string;

    @IsString()
    Variedad: string;

    @IsString()
    MercadoOBJ: string;

    @IsString()
    Organico: string;

    @IsString()
    EtapaFenologica: string;

    @IsString()
    Tipo_Riesgo: string;
}
