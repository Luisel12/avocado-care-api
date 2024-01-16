import { Injectable } from '@nestjs/common';
import { CreateAlertasPlagasDto } from './dto/create-alertas_plagas.dto';
import { UpdateAlertasPlagasDto } from './dto/update-alertas_plagas.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { AlertasPlagas } from './entities/alertas_plagas.entity';

import * as bcrypt from "bcrypt";
import { throwIfEmpty } from 'rxjs';
import { Plagas } from 'src/plagas/entities/plagas.entity';

@Injectable()
export class AlertasPlagasService {
  // esta va a ser la estructura de cada uno
  constructor(
    @InjectModel(AlertasPlagas.name) private AlertasPlagasModel1: Model<AlertasPlagas>
  ) {}
  
  async create(createAlertasEnfermedadeDto: CreateAlertasPlagasDto): Promise<AlertasPlagas> {

    return; 
  }
  
  async findAll(): Promise<Plagas[]> {
    const plagas = await this.AlertasPlagasModel1.find();

    return plagas;
    
  }
  
  async findOne(id: number) {
    return `This action returns a #${id} alertasPlagas`;
  }

  async update(id: number, updateAlertasPlagasDto: UpdateAlertasPlagasDto): Promise <AlertasPlagas> {
    return ;
  }

  async remove(id: number) {
    return `This action removes a #${id} alertasPlagas`;
  }
}
