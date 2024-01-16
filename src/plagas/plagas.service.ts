import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
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
    try {
      const plagas = await this.PlagasModel1.create(createPlagasDto);
      return plagas;
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        throw new BadRequestException(`${createPlagasDto.NomPlagas} ya está registrado`);
      }
      throw new InternalServerErrorException('Ocurrió un error al crear la Plaga');
    }
  }

  async findAll() {
    const plagas = await this.PlagasModel1.find();
      return plagas;
 
  }

  findOne(id: number) {
    return `This action returns a #${id} plagas`;
  }

  update(id: number, updatePlagasDto: UpdatePlagasDto): Promise <Plagas> {
    return ;
  }

  remove(id: number) {
    return `This action removes a #${id} plagas`;
  }
}
