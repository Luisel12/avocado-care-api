import { IsEmail, MinLength, IsString, isBoolean, IsBoolean} from "class-validator";

export class CreateUserDto {
    
    @IsEmail()
    Correo: string;

    
    @MinLength(8)
    
    Contra: string;

    @IsString()
    Nombre: string;

    @IsBoolean()
    isActive: boolean;
}
