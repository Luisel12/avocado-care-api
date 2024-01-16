import { Injectable } from '@nestjs/common';
import { CreateEnfermedadeDto } from './dto/create-enfermedade.dto';
import { UpdateEnfermedadeDto } from './dto/update-enfermedade.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Enfermedade } from './entities/enfermedade.entity';



@Injectable()
export class EnfermedadesService {
  constructor(
    @InjectModel(Enfermedade.name) private EnfermedadeModel1: Model<Enfermedade>
  ) {}

  async create(createEnfermedadeDto: CreateEnfermedadeDto): Promise<Enfermedade> {
    const Enfermedade = await this.EnfermedadeModel1.create(CreateEnfermedadeDto);
 
    return Enfermedade;
  }

  async findAll(): Promise<Enfermedade[]> {
    const detalles = await this.EnfermedadeModel1.find();

    return detalles;
  }

  async findOne(id: number) {
    return `This action returns a #${id} enfermedade`;
  }

  async update(id: number, updateEnfermedadeDto: UpdateEnfermedadeDto): Promise <Enfermedade> {
    return;
  }

  async remove(id: number) {
    return `This action removes a #${id} enfermedade`;
  }
}
