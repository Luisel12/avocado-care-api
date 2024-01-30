import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePlagasDto } from './dto/create-plagas.dto';
import { UpdatePlagasDto } from './dto/update-plagas.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Plagas } from './entities/plagas.entity';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

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

  async findOne(id: String) {
    const Plaga = await this.PlagasModel1.findById(id);
    if(!Plaga)

    throw new NotFoundException("El ID resivido no existe");
    return Plaga;
  }

  async update(id: string, updatePlagasDto: UpdatePlagasDto): Promise <Plagas> {
    let Plaga= await this.findOne(id);
    if(id != updatePlagasDto._id)
    throw new BadRequestException("Los IDs no coinciden")

    await this.PlagasModel1.updateOne({_id: id}, updatePlagasDto)
    Plaga= await this.findOne(id);
    return Plaga;
  }

  async remove(id: string) {
    const Plagas = await this.findOne(id);

    await this.PlagasModel1.deleteOne({_id: id});
    return Plagas;
  }
}
