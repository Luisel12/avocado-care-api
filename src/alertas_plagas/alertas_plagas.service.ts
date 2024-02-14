import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
 
  constructor(
    @InjectModel(AlertasPlagas.name) private AlertasPlagasModel1: Model<AlertasPlagas>
  ) {}
  
  async create(createAlertasEnfermedadeDto: CreateAlertasPlagasDto): Promise<AlertasPlagas> {
    try {
      const alertasPlagas = await this.AlertasPlagasModel1.create(createAlertasEnfermedadeDto);
      return alertasPlagas;
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        throw new BadRequestException(`${createAlertasEnfermedadeDto.id_Plagas} ya está registrado`);
      }
      throw new InternalServerErrorException('Ocurrió un error al crear la Alerta de Plaga');
    }
  }
  
  async findAll(): Promise<AlertasPlagas[]> {
    const alertasPlagas = await this.AlertasPlagasModel1.find();
    return alertasPlagas;
  }
  
  async findOne(id: string) {
    const alertaplaga = await this.AlertasPlagasModel1.findById(id);
    if(!alertaplaga)

    throw new NotFoundException("El ID resivido no existe");
    return alertaplaga;
  }

  async findbyplagaid(id_Plagas: string): Promise<AlertasPlagas[]>  {
    const plaga = await this.AlertasPlagasModel1.find({id_Plagas});

    if (!plaga) {
      throw new NotFoundException("El ID recibido no existe");
    }

    return plaga;
  }

  async update(id: string, updateAlertasPlagasDto: UpdateAlertasPlagasDto): Promise <AlertasPlagas> {
    let alertaplaga = await this.findOne(id);
      if(id != updateAlertasPlagasDto.id_Plagas)
      throw new BadRequestException("Los IDs no coinciden")

      await this.AlertasPlagasModel1.updateOne({_id: id}, updateAlertasPlagasDto)
      alertaplaga =  await this.findOne(id);
    return alertaplaga;
  }

  async remove(id: string) {
    const alertaplaga = await this.findOne(id);

    await this.AlertasPlagasModel1.deleteOne({_id: id});
    return alertaplaga;
  }
}
