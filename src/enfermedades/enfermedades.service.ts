import { Injectable } from '@nestjs/common';
import { CreateEnfermedadeDto } from './dto/create-enfermedade.dto';
import { UpdateEnfermedadeDto } from './dto/update-enfermedade.dto';

@Injectable()
export class EnfermedadesService {
  create(createEnfermedadeDto: CreateEnfermedadeDto) {
    return 'This action adds a new enfermedade';
  }

  findAll() {
    return `This action returns all enfermedades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enfermedade`;
  }

  update(id: number, updateEnfermedadeDto: UpdateEnfermedadeDto) {
    return `This action updates a #${id} enfermedade`;
  }

  remove(id: number) {
    return `This action removes a #${id} enfermedade`;
  }
}
