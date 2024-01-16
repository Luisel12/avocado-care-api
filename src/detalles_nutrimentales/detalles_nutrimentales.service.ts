import { Injectable } from '@nestjs/common';
import { CreateDetallesNutrimentaleDto } from './dto/create-detalles_nutrimentale.dto';
import { UpdateDetallesNutrimentaleDto } from './dto/update-detalles_nutrimentale.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { DetallesNutrimentale } from './entities/detalles_nutrimentale.entity';

import * as bcrypt from "bcrypt";
import { throwIfEmpty } from 'rxjs';
import { Nutriente } from 'src/nutrientes/entities/nutriente.entity';

@Injectable()
export class DetallesNutrimentalesService {
  constructor(
    @InjectModel(DetallesNutrimentale.name) private DetallesNutrimentaleModel1: Model<DetallesNutrimentale>
  ) {}

  async create(createDetallesNutrimentaleDtoDto: CreateDetallesNutrimentaleDto): Promise<DetallesNutrimentale> {

    // Puedes realizar más operaciones o retornar el objeto creado según tus necesidades
    return ;
  }

  async findAll(): Promises<Nutriente[]> {
    const nutrimentales = await this.DetallesNutrimentaleModel1.find();

    return nutrimentales ;
  }

  async findOne(id: number) {
    return `This action returns a #${id} detallesNutrimentale`;
  }

  async update(id: number, updateDetallesNutrimentaleDto: UpdateDetallesNutrimentaleDto): Promise <DetallesNutrimentale> {
    return ;
  }

  async remove(id: number) {
    return `This action removes a #${id} detallesNutrimentale`;
  }
}
