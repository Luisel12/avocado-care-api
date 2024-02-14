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
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

@Injectable()
export class AlertasEnfermedadesService {
  // esta va a ser la estructura de cada uno 
  constructor(
    @InjectModel(AlertasEnfermedade.name) private AlertasEnfermedadeModel1: Model<AlertasEnfermedade>
  ) {}
//aqui mero
async create(createAlertasEnfermedadeDto: CreateAlertasEnfermedadeDto): Promise<Enfermedade> {
  try {
    const enfermedad = await this.AlertasEnfermedadeModel1.create(createAlertasEnfermedadeDto);
    return enfermedad;

  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      throw new BadRequestException(`${createAlertasEnfermedadeDto.id_Enfermedades} ya está registrado`);
    }
    throw new InternalServerErrorException('Ocurrió un error al crear la Enfermedad');
  }
}
//aqui mas
  async findAll(): Promise<Enfermedade[]> {
    const alertas = await this.AlertasEnfermedadeModel1.find();

    return alertas;

  }
  

  async findOne(id: string) {
    const alerta = await this.AlertasEnfermedadeModel1.findById(id);
    if(!alerta)

    throw new NotFoundException("El ID resivido no existe");
    return alerta;
  }

  async findbyhuertoid(id_Huerto: string): Promise<AlertasEnfermedade[]>  {
    const huertoid = await this.AlertasEnfermedadeModel1.find({id_Huerto});

    if (!huertoid) {
      throw new NotFoundException("El ID recibido no existe");
    }

    return huertoid;
  }

  async findbyenfid(id_Enfermedades: string): Promise<AlertasEnfermedade[]>  {
    const enfid = await this.AlertasEnfermedadeModel1.find({id_Enfermedades});

    if (!enfid) {
      throw new NotFoundException("El ID recibido no existe");
    }

    return enfid;
  }

  async findbyenfermedadesid(id_Huerto: string): Promise<AlertasEnfermedade[]>  {
    const enfermdadid = await this.AlertasEnfermedadeModel1.find({id_Huerto});

    if (!enfermdadid) {
      throw new NotFoundException("El ID recibido no existe");
    }

    return enfermdadid;
  }

  async update(id: string, updateAlertasEnfermedadeDto: UpdateAlertasEnfermedadeDto): Promise <AlertasEnfermedade> {
    let alerta= await this.findOne(id);
    if(id != updateAlertasEnfermedadeDto._id)
    throw new BadRequestException("Los IDs no coinciden")

    await this.AlertasEnfermedadeModel1.updateOne({_id: id}, updateAlertasEnfermedadeDto)
    alerta= await this.findOne(id);
    return alerta;
  }

  async remove(id: string) {
    const alerta = await this.findOne(id);

    await this.AlertasEnfermedadeModel1.deleteOne({_id: id});
    return alerta;
  }
}
