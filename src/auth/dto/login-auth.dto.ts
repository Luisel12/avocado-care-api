import { IsEmail, MinLength, IsString} from "class-validator";

export class LoginUserDto {
    @IsEmail()
    Correo: string;

    @MinLength(8)
    Contra: string;

}