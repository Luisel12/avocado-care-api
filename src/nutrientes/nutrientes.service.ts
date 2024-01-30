import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { CreateNutrienteDto } from './dto/create-nutriente.dto';
import { UpdateNutrienteDto } from './dto/update-nutriente.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Nutriente } from './entities/nutriente.entity';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';


@Injectable()
export class NutrientesService {
  constructor(
    @InjectModel(Nutriente.name) private NutrienteModel1: Model<Nutriente>
  ) {}

  async create(createNutrienteDto: CreateNutrienteDto): Promise<Nutriente> {
    try {
      const nutriente = await this.NutrienteModel1.create(createNutrienteDto);
      return nutriente;
    } catch (error) {
      console.log(error);
      if (error.code == 11000) {
        throw new BadRequestException(`${createNutrienteDto.potacio, createNutrienteDto.calcio,createNutrienteDto.magnecio,createNutrienteDto.fosforo } ya está registrado`);
      }
      throw new InternalServerErrorException('Ocurrió un error al crear el Nutriente');
    }
  }


  async findAll() {
    const nutriente = await this.NutrienteModel1.find();
      return nutriente;

  }

  async  findOne(id: string) {
    const nutriente = await this.NutrienteModel1.findById(id);
    if(!nutriente)

    throw new NotFoundException("El ID resivido no existe");
    return nutriente;
  }

  async  update(id: string, updateNutrienteDto: UpdateNutrienteDto): Promise <Nutriente> {
    let nutriente= await this.findOne(id);
    if(id != updateNutrienteDto._id)
    throw new BadRequestException("Los IDs no coinciden")

    await this.NutrienteModel1.updateOne({_id: id}, UpdateNutrienteDto)
    nutriente= await this.findOne(id);
    return nutriente;
  }

  async remove(id: string) {
       const PlagasCuarentenaria = await this.findOne(id);

    await this.NutrienteModel1.deleteOne({_id: id});
    return PlagasCuarentenaria;
  }
}
