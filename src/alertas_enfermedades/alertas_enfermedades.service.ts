import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAlertasEnfermedadeDto } from './dto/create-alertas_enfermedade.dto';
import { UpdateAlertasEnfermedadeDto } from './dto/update-alertas_enfermedade.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { AlertasEnfermedade } from './entities/alertas_enfermedade.entity';
//se agregan 
import * as bcrypt from "bcrypt";
import { throwIfEmpty } from 'rxjs';
import { Enfermedade } from 'src/enfermedades/entities/enfermedade.entity';

@Injectable()
export class AlertasEnfermedadesService {
  // esta va a ser la estructura de cada uno 
  constructor(
    @InjectModel(AlertasEnfermedade.name) private AlertasEnfermedadeModel1: Model<AlertasEnfermedade>
  ) {}
//aqui mero 
  async create(createAlertasEnfermedadeDto: CreateAlertasEnfermedadeDto): Promise<Enfermedade> {
    
    return ;
}
//aqui mas 
  async findAll(): Promise<Enfermedade[]> {
    const alertas = await this.AlertasEnfermedadeModel1.find();

    return alertas; 
     
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
