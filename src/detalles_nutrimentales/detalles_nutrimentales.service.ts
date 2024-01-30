import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateDetallesNutrimentaleDto } from './dto/create-detalles_nutrimentale.dto';
import { UpdateDetallesNutrimentaleDto } from './dto/update-detalles_nutrimentale.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { DetallesNutrimentale } from './entities/detalles_nutrimentale.entity';

import * as bcrypt from "bcrypt";
import { throwIfEmpty } from 'rxjs';
import { Nutriente } from 'src/nutrientes/entities/nutriente.entity';
import { throws } from 'assert';

@Injectable()
export class DetallesNutrimentalesService {
  constructor(
    @InjectModel(DetallesNutrimentale.name) private DetallesNutrimentaleModel1: Model<DetallesNutrimentale>
  ) {}

  async create(createDetallesNutrimentaleDto: CreateDetallesNutrimentaleDto): Promise<DetallesNutrimentale> {
    try {
      const detallesNutrimentales = await this.DetallesNutrimentaleModel1.create(createDetallesNutrimentaleDto);
      return detallesNutrimentales;
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        throw new BadRequestException(`${createDetallesNutrimentaleDto.id_Nutrientes} ya está registrado`);
      }
      throw new InternalServerErrorException('Ocurrió un error al crear los Detalles Nutrimentales');
    }
  }


  async findAll() {
    const nutrimentales = await this.DetallesNutrimentaleModel1.find();

    return nutrimentales ;
  }

  async findOne(id: string) {
    const nutrientes = await this.DetallesNutrimentaleModel1.findById(id);
    if(!nutrientes)
    throw new NotFoundException("El ID resivido no existe");
    return nutrientes;
  }

  async update(id: string, updateDetallesNutrimentaleDto: UpdateDetallesNutrimentaleDto): Promise <DetallesNutrimentale> {
  let nutriente= await this.findOne(id);
    if(id != updateDetallesNutrimentaleDto._id)
    throw new BadRequestException("Los IDs no coinciden")

    await this.DetallesNutrimentaleModel1.updateOne({_id: id}, updateDetallesNutrimentaleDto)
    nutriente= await this.findOne(id);
    return nutriente;
  }

  async remove(id: string) {
    const nutriente = await this.findOne(id);

    await this.DetallesNutrimentaleModel1.deleteOne({_id: id});
    return nutriente;
  }
}
