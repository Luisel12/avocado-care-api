import { IsString } from "class-validator";

export class CreatePlagasDto {

    @IsString()
    NomPlagas: string;

    @IsString()
    Img: string;

    @IsString()
    InfoPlag: string;

    @IsString()
    RecomendacionPlag: string;

}
