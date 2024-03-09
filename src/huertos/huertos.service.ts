import { Injectable } from '@nestjs/common';
import { CreateHuertoDto } from './dto/create-huerto.dto';
import { UpdateHuertoDto } from './dto/update-huerto.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Huerto } from './entities/huerto.entity';
import { BadRequestException } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

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


  async findAll(): Promise<Huerto[]> {
    const huerto = await this.HuertoModel1.find();
      return huerto;

  }

  async findbyuserid(id_Usuario: string): Promise<Huerto[]>  {
    const huerto = await this.HuertoModel1.find({id_Usuario});

    if (!huerto) {
      throw new NotFoundException("El ID recibido no existe");
    }

    return huerto;
  }

  async findOne(_id: string) {
    const huerto = await this.HuertoModel1.findById(_id);

    if (!huerto) {
      throw new NotFoundException("El ID recibido no existe");
    }

    return huerto;
  }

  async update(id: string, updateHuertoDto: UpdateHuertoDto): Promise <Huerto > {
    let huerto= await this.findOne(id);
    if(id != updateHuertoDto._id)
    throw new BadRequestException("Los IDs no coinciden")

    await this.HuertoModel1.updateOne({_id: id}, updateHuertoDto)
    huerto = await this.findOne(id);
    return huerto;
  }

  async remove(id: string) {
    const huerto = await this.findOne(id);

    await this.HuertoModel1.deleteOne({_id: id});
    return huerto;
  }
}
