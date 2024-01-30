import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { promises } from 'dns';
import { User } from './entities/auth.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import * as bcrypt from "bcrypt";
import { NotFoundError, throwIfEmpty } from 'rxjs';
import { throws } from 'assert';
import { LoginUserDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
// esta va a ser la estructura de cada uno 
  constructor( 
    @InjectModel(User.name) private Usermodel1: Model<User>
  ) {}
//desde aqui 
  async login(loginAuthDto: LoginUserDto): Promise<User>{
    const { Correo, Contra } = loginAuthDto;
    const usuario = await this.Usermodel1.findOne( 
      {
        Correo
      }
     );



    if (!usuario) {
      throw new NotFoundException(`No se encontró usuario con el email ${Correo}`);
    }

    if ( !bcrypt.compareSync( Contra, usuario.Contra ) ){
      throw new UnauthorizedException('La contraseña del usuario es icorrecta');
    }

    const { Contra:_, ...user } = usuario.toJSON();

    return user;
  }

  async create(createAuthDto: CreateUserDto): Promise<User> {

    try{
      createAuthDto.Contra = bcrypt.hashSync(createAuthDto.Contra, 10)

      const user = await this.Usermodel1.create(createAuthDto);

      const { Contra, ...rest } = user.toJSON();

      return rest;

    } catch (error) {
      console.log(error);
      if (error.code == 11000) {
        throw new BadRequestException(`${createAuthDto.Correo} ya esta registrado`);

      }

      throw new InternalServerErrorException('Mi primera chamba')
    }

  }
//aqui tambien
  async findAll(): Promise<User[]> {
    const users = await this.Usermodel1.find();

    return users.map( (user) => {
      const { Contra, ...rest } = user.toJSON();

      return rest;
    } );
  }

  async findOne(id: string) {
    const user = await this.Usermodel1.findById(id);
    if(!user)

    throw new NotFoundException('El ID resivido no existe');
    return user;
  }

  async update(id: string, updateAuthDto: UpdateAuthDto): Promise <User> {
  let user = await this.findOne(id);
    if(id != updateAuthDto._id)
    throw new BadRequestException("Los IDs no coinciden")

    await this.Usermodel1.updateOne({_id: id}, updateAuthDto)
    user = await this.findOne(id);
  return user;
  }

  async remove(id: string) {
    const user = await this.findOne(id);

    await this.Usermodel1.deleteOne({_id: id});
    return user;
  }
}
