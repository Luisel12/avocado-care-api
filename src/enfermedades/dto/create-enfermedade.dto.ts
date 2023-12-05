import { IsString } from "class-validator";

export class CreateEnfermedadeDto {
   
    @IsString()
    id_Enfermedades: string;
}
