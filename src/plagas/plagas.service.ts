import { Injectable } from '@nestjs/common';
import { CreatePlagasDto } from './dto/create-plagas.dto';
import { UpdatePlagasDto } from './dto/update-plagas.dto';

@Injectable()
export class PlagasService {
  create(createPlagasDto: CreatePlagasDto) {
    return 'This action adds a new plagas';
  }

  findAll() {
    return `This action returns all plagas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plagas`;
  }

  update(id: number, updatePlagasDto: UpdatePlagasDto) {
    return `This action updates a #${id} plagas`;
  }

  remove(id: number) {
    return `This action removes a #${id} plagas`;
  }
}
