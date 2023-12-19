import { Injectable } from '@nestjs/common';
import { CreatePlagasDto } from './dto/create-plagas.dto';
import { UpdatePlagasDto } from './dto/update-plagas.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Plagas } from './entities/plagas.entity';

@Injectable()
export class PlagasService {
  constructor(
    @InjectModel(Plagas.name) private PlagasModel1: Model<Plagas>
  ) {}

  async create(createPlagasDto: CreatePlagasDto): Promise<Plagas> {
    const Plagas = await this.PlagasModel1.create(CreatePlagasDto);
    return Plagas;
  }

  findAll() {
    return `This action returns all plagas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plagas`;
  }

  update(id: number, updatePlagasDto: UpdatePlagasDto) {
    return `This action updates a #${id} plagas`;
  }

  remove(id: number) {
    return `This action removes a #${id} plagas`;
  }
}
