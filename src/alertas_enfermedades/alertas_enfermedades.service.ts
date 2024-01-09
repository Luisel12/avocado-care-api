import { Injectable } from '@nestjs/common';
import { CreateAlertasEnfermedadeDto } from './dto/create-alertas_enfermedade.dto';
import { UpdateAlertasEnfermedadeDto } from './dto/update-alertas_enfermedade.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { AlertasEnfermedade } from './entities/alertas_enfermedade.entity';

@Injectable()
export class AlertasEnfermedadesService {
  // esta va a ser la estructura de cada uno 
  constructor(
    @InjectModel(AlertasEnfermedade.name) private AlertasEnfermedadeModel1: Model<AlertasEnfermedade>
  ) {}

  async create(createAlertasEnfermedadeDto: CreateAlertasEnfermedadeDto): Promise<AlertasEnfermedade> {
    const alertasEnfermedade = await this.AlertasEnfermedadeModel1.create(createAlertasEnfermedadeDto);

    // Puedes realizar más operaciones o retornar el objeto creado según tus necesidades
    return alertasEnfermedade;
  
}
  async findAll() {
    return `This action returns all alertasEnfermedades`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} alertasEnfermedade`;
  }

  async update(id: number, updateAlertasEnfermedadeDto: UpdateAlertasEnfermedadeDto): Promise <AlertasEnfermedade> {
    return;
  }

  async remove(id: number) {
    return `This action removes a #${id} alertasEnfermedade`;
  }
}
