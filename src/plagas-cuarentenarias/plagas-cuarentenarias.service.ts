import { Injectable } from '@nestjs/common';
import { CreatePlagasCuarentenariaDto } from './dto/create-plagas-cuarentenaria.dto';
import { UpdatePlagasCuarentenariaDto } from './dto/update-plagas-cuarentenaria.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { PlagasCuarentenaria } from './entities/plagas-cuarentenaria.entity';


@Injectable()
export class PlagasCuarentenariasService {
  constructor(
    @InjectModel(PlagasCuarentenaria.name) private PlagasCuarentenariaModel1: Model<PlagasCuarentenaria>
  ) {} 
  async create(CreatePlagasCuarentenariaDto: CreatePlagasCuarentenariaDto): Promise<PlagasCuarentenaria> {
    const PlagasCuarentenaria = await this.PlagasCuarentenariaModel1.create(CreatePlagasCuarentenariaDto);
 
    return PlagasCuarentenaria;
  }

  async findAll() {
    return `This action returns all plagasCuarentenarias`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} plagasCuarentenaria`;
  }

  async update(id: number, updatePlagasCuarentenariaDto: UpdatePlagasCuarentenariaDto): Promise <PlagasCuarentenaria>{
    return ;
  }

  async remove(id: number) {
    return `This action removes a #${id} plagasCuarentenaria`;
  }
}
