import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/shared/interfaces/jwtpayload.interface';


export function
    createjwt(payload: JwtPayload, jwt: JwtService): string{ 
        return jwt.sign(payload);
    }

export function
     validatejwt(token: string, jwt: JwtService): JwtPayload{
        return  jwt.verify<JwtPayload>( 
            token,
            {
                secret: process.env.JWT_SEED
            }
        )

    }

