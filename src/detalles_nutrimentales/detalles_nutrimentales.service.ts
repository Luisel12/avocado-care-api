import { Injectable } from '@nestjs/common';
import { CreateDetallesNutrimentaleDto } from './dto/create-detalles_nutrimentale.dto';
import { UpdateDetallesNutrimentaleDto } from './dto/update-detalles_nutrimentale.dto';

@Injectable()
export class DetallesNutrimentalesService {
  create(createDetallesNutrimentaleDto: CreateDetallesNutrimentaleDto) {
    return 'This action adds a new detallesNutrimentale';
  }

  findAll() {
    return `This action returns all detallesNutrimentales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detallesNutrimentale`;
  }

  update(id: number, updateDetallesNutrimentaleDto: UpdateDetallesNutrimentaleDto) {
    return `This action updates a #${id} detallesNutrimentale`;
  }

  remove(id: number) {
    return `This action removes a #${id} detallesNutrimentale`;
  }
}
