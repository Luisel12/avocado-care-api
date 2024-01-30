import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards , Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ListenOptions } from 'net';
import { ListResponse } from './interfaces/list-response.interface';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoginUserDto } from './dto/login-auth.dto';
import { AuthResponse } from './interfaces/auth-response.interface';
import { createjwt } from 'src/shared/services/jwtvalidator/jwtvalidator.service';
import { JwtService } from '@nestjs/jwt';
//esto va en todas la carpetas
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private jwt:JwtService) {}

  @Post('login')
  async login(@Body() loginAuthDto: LoginUserDto): Promise<AuthResponse>{
    const user = await this.authService.login(loginAuthDto);
    return {
      user,
      token: createjwt({id: user._id}, this.jwt)
    };
  }

  @Post('register')
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request()req: Request): Promise<ListResponse> {
    const users = await this.authService.findAll();

    const userl =  req ['user']
    return {
      users: users, 
      token: createjwt({id: userl._id}, this.jwt)
    };

  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Request()req: Request): Promise<AuthResponse> {
    const usero = req ["user"]
    return{ 
      user: await this.authService.findOne(id), 
      token : createjwt({id: usero._id}, this.jwt)
    } ;
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto, @Request()req: Request): Promise<AuthResponse>  {
    const useru = req ["user"]
    return{
      user: await this.authService.update(id, updateAuthDto),
      token : createjwt({id: useru._id}, this.jwt)

    } ;
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string, @Request()req: Request) {
    const useru = req ["user"]
    return{
      user: await this.authService.remove(id),
      token : createjwt({id: useru._id}, this.jwt)
    } ;
  }
}
