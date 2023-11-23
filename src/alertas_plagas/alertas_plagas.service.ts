import { Injectable } from '@nestjs/common';
import { CreateAlertasPlagasDto } from './dto/create-alertas_plagas.dto';
import { UpdateAlertasPlagasDto } from './dto/update-alertas_plagas.dto';

@Injectable()
export class AlertasPlagasService {
  create(createAlertasPlagasDto: CreateAlertasPlagasDto) {
    return 'This action adds a new alertasPlagas';
  }

  findAll() {
    return `This action returns all alertasPlagas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alertasPlagas`;
  }

  update(id: number, updateAlertasPlagasDto: UpdateAlertasPlagasDto) {
    return `This action updates a #${id} alertasPlagas`;
  }

  remove(id: number) {
    return `This action removes a #${id} alertasPlagas`;
  }
}
