import { Injectable } from '@nestjs/common';
import { CreatePlagasCuarentenariaDto } from './dto/create-plagas-cuarentenaria.dto';
import { UpdatePlagasCuarentenariaDto } from './dto/update-plagas-cuarentenaria.dto';

@Injectable()
export class PlagasCuarentenariasService {
  create(createPlagasCuarentenariaDto: CreatePlagasCuarentenariaDto) {
    return 'This action adds a new plagasCuarentenaria';
  }

  findAll() {
    return `This action returns all plagasCuarentenarias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plagasCuarentenaria`;
  }

  update(id: number, updatePlagasCuarentenariaDto: UpdatePlagasCuarentenariaDto) {
    return `This action updates a #${id} plagasCuarentenaria`;
  }

  remove(id: number) {
    return `This action removes a #${id} plagasCuarentenaria`;
  }
}
