import { Injectable } from '@nestjs/common';
import { CreateDetallesNutrimentaleDto } from './dto/create-detalles_nutrimentale.dto';
import { UpdateDetallesNutrimentaleDto } from './dto/update-detalles_nutrimentale.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { DetallesNutrimentale } from './entities/detalles_nutrimentale.entity';

@Injectable()
export class DetallesNutrimentalesService {
  constructor(
    @InjectModel(DetallesNutrimentale.name) private DetallesNutrimentaleModel1: Model<DetallesNutrimentale>
  ) {}

  async create(createDetallesNutrimentaleDtoDto: CreateDetallesNutrimentaleDto): Promise<DetallesNutrimentale> {
    const DetallesNutrimentale = await this.DetallesNutrimentaleModel1.create(CreateDetallesNutrimentaleDto);

    // Puedes realizar más operaciones o retornar el objeto creado según tus necesidades
    return DetallesNutrimentale;
  }

  async findAll() {
    return `This action returns all detallesNutrimentales`;
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
