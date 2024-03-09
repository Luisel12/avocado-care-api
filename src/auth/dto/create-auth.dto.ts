import { IsEmail, MinLength, IsString, isBoolean, IsBoolean} from "class-validator";

export class CreateUserDto {
    
    @IsEmail()
    Correo: string;

    
    @MinLength(8)
    Contra: string;

    @MinLength(3)
    Nombre: string;

   
}
