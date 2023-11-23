import { Injectable } from '@nestjs/common';
import { CreateHuertoDto } from './dto/create-huerto.dto';
import { UpdateHuertoDto } from './dto/update-huerto.dto';

@Injectable()
export class HuertosService {
  create(createHuertoDto: CreateHuertoDto) {
    return 'This action adds a new huerto';
  }

  findAll() {
    return `This action returns all huertos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} huerto`;
  }

  update(id: number, updateHuertoDto: UpdateHuertoDto) {
    return `This action updates a #${id} huerto`;
  }

  remove(id: number) {
    return `This action removes a #${id} huerto`;
  }
}
