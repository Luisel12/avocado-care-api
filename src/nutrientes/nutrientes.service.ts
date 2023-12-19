import { Injectable } from '@nestjs/common';
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
    const Nutriente = await this.NutrienteModel1.create(CreateNutrienteDto);
  
    return Nutriente;
  }

  async findAll() {
    return `This action returns all nutrientes`;
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
