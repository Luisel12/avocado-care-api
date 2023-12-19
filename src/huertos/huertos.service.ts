import { Injectable } from '@nestjs/common';
import { CreateHuertoDto } from './dto/create-huerto.dto';
import { UpdateHuertoDto } from './dto/update-huerto.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Huerto } from './entities/huerto.entity';

@Injectable()
export class HuertosService {
  constructor(
    @InjectModel(Huerto.name) private HuertoModel1: Model<Huerto>
  ) {}

  async create(createHuertoDto: CreateHuertoDto): Promise<Huerto> {
    const Huerto = await this.HuertoModel1.create(CreateHuertoDto);
 
    return Huerto;
  }

  async findAll() {
    return `This action returns all huertos`;
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
