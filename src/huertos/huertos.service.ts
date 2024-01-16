import { Injectable } from '@nestjs/common';
import { CreateHuertoDto } from './dto/create-huerto.dto';
import { UpdateHuertoDto } from './dto/update-huerto.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Huerto } from './entities/huerto.entity';
import { BadRequestException } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class HuertosService {
  constructor(
    @InjectModel(Huerto.name) private HuertoModel1: Model<Huerto>
  ) {}

  async create(createHuertoDto: CreateHuertoDto): Promise<Huerto> {
    try {
                        
      const huerto = await this.HuertoModel1.create(createHuertoDto);
      return huerto;

    } catch (error) {
      console.log(error);
      if (error.code == 11000) {
        throw new BadRequestException(`${createHuertoDto.Nombre} ya está registrado`);
      }

      throw new InternalServerErrorException('Ocurrió un error al crear el Huerto');
    }
  }


  async findAll() {
    const huerto = await this.HuertoModel1.find();
      return huerto;
 
  }

  async findOne(id: number) {
    return `This action returns a #${id} huerto`;
  }

  async update(id: number, updateHuertoDto: UpdateHuertoDto): Promise <Huerto > {
    return ;
  }

  async remove(id: number) {
    return `This action removes a #${id} huerto`;
  }
}
