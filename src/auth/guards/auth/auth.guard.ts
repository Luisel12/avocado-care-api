import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { strict } from 'assert';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import { validatejwt } from 'src/shared/services/jwtvalidator/jwtvalidator.service';




@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwt: JwtService,
    private authservice : AuthService
  ){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.headers);

    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    if(!type || type != 'Bearer'){
      throw new UnauthorizedException('No hay permiso')
    }try{
      const payload = validatejwt(token, this.jwt);
      if(!payload.id)
      throw new UnauthorizedException('No hay permiso')
    const user = this.authservice.findOne(payload.id);
    request['user'] = user;

    }catch(error: any){
      throw new UnauthorizedException('No hay permiso')
    }

    return true;
  }
}
