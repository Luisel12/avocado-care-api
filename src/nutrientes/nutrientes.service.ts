import { Injectable } from '@nestjs/common';
import { CreateNutrienteDto } from './dto/create-nutriente.dto';
import { UpdateNutrienteDto } from './dto/update-nutriente.dto';

@Injectable()
export class NutrientesService {
  create(createNutrienteDto: CreateNutrienteDto) {
    return 'This action adds a new nutriente';
  }

  findAll() {
    return `This action returns all nutrientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nutriente`;
  }

  update(id: number, updateNutrienteDto: UpdateNutrienteDto) {
    return `This action updates a #${id} nutriente`;
  }

  remove(id: number) {
    return `This action removes a #${id} nutriente`;
  }
}
