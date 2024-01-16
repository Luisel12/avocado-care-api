import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { CreateNutrienteDto } from './dto/create-nutriente.dto';
import { UpdateNutrienteDto } from './dto/update-nutriente.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Nutriente } from './entities/nutriente.entity';


@Injectable()
export class NutrientesService {
  constructor(
    @InjectModel(Nutriente.name) private NutrienteModel1: Model<Nutriente>
  ) {}

  async create(createNutrienteDto: CreateNutrienteDto): Promise<Nutriente> {
    try {
      const nutriente = await this.NutrienteModel1.create(createNutrienteDto);
      return nutriente;
    } catch (error) {
      console.log(error);
      if (error.code == 11000) {
        throw new BadRequestException(`${createNutrienteDto.potacio, createNutrienteDto.calcio,createNutrienteDto.magnecio,createNutrienteDto.fosforo } ya está registrado`);
      }
      throw new InternalServerErrorException('Ocurrió un error al crear el Nutriente');
    }
  }


  async findAll() {
    const nutriente = await this.NutrienteModel1.find();
      return nutriente;
 
  }

  async  findOne(id: number) {
    return `This action returns a #${id} nutriente`;
  }

  async  update(id: number, updateNutrienteDto: UpdateNutrienteDto): Promise <Nutriente> {
    return ;
  }

  async remove(id: number) {
    return `This action removes a #${id} nutriente`;
  }
}
