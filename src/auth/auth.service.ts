import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { promises } from 'dns';
import { User } from './entities/auth.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import * as bcrypt from "bcrypt";
import { throwIfEmpty } from 'rxjs';

@Injectable()
export class AuthService {
// esta va a ser la estructura de cada uno 
  constructor( 
    @InjectModel(User.name) private Usermodel1: Model<User>
  ) {}
//desde aqui 
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

  async findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  async update(id: number, updateAuthDto: UpdateAuthDto): Promise <User> {
    return ;
  }

  async remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
