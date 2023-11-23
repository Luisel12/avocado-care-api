import { Injectable } from '@nestjs/common';
import { CreateAlertasEnfermedadeDto } from './dto/create-alertas_enfermedade.dto';
import { UpdateAlertasEnfermedadeDto } from './dto/update-alertas_enfermedade.dto';

@Injectable()
export class AlertasEnfermedadesService {
  create(createAlertasEnfermedadeDto: CreateAlertasEnfermedadeDto) {
    return 'This action adds a new alertasEnfermedade';
  }

  findAll() {
    return `This action returns all alertasEnfermedades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alertasEnfermedade`;
  }

  update(id: number, updateAlertasEnfermedadeDto: UpdateAlertasEnfermedadeDto) {
    return `This action updates a #${id} alertasEnfermedade`;
  }

  remove(id: number) {
    return `This action removes a #${id} alertasEnfermedade`;
  }
}
