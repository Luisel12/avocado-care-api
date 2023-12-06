import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { promises } from 'dns';
import { User } from './entities/auth.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';

@Injectable()
export class AuthService {
// esta va a ser la estructura de cada uno 
  constructor( 
    @InjectModel(User.name) private Usermodel1: Model<User>
  ) {}

  async create(createAuthDto: CreateUserDto): Promise<User> {
    const user = await this.Usermodel1.create(createAuthDto);

    const { Contra, ...rest } = user.toJSON(); 
    return rest;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
