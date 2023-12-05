import { IsString } from "class-validator";

export class CreateNutrienteDto {

    @IsString()
    id_infonutri: string;

    @IsString()
    fosforo: string;

    @IsString()
    potacio: string;

    @IsString()
    magnecio: string;

    @IsString()
    calcio: string;

}
