import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEnfermedadeDto } from './dto/create-enfermedade.dto';
import { UpdateEnfermedadeDto } from './dto/update-enfermedade.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Enfermedade } from './entities/enfermedade.entity';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';



@Injectable()
export class EnfermedadesService {
  constructor(
    @InjectModel(Enfermedade.name) private EnfermedadeModel1: Model<Enfermedade>
  ) {}

  async create(createEnfermedadeDto: CreateEnfermedadeDto): Promise<Enfermedade> {
    try {
      const enfermedad = await this.EnfermedadeModel1.create(createEnfermedadeDto);
      return enfermedad;
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        throw new BadRequestException(`${createEnfermedadeDto.id_Enfermedades} ya está registrado`);
      }
      throw new InternalServerErrorException('Ocurrió un error al crear la Enfermedad');
    }
  }


  async findAll(): Promise<Enfermedade[]> {
    const enfermedades = await this.EnfermedadeModel1.find();

    return enfermedades;
  }

  async findOne(id: string) {
    const enfermedad = await this.EnfermedadeModel1.findById(id);
    if(!enfermedad)

    throw new NotFoundException("El ID resivido no existe");
    return enfermedad;
  }

  async update(id: string, updateEnfermedadeDto: UpdateEnfermedadeDto): Promise <Enfermedade> {
    let enfermedad= await this.findOne(id);
    if(id != updateEnfermedadeDto._id)
    throw new BadRequestException("Los IDs no coinciden")

    await this.EnfermedadeModel1.updateOne({_id: id}, updateEnfermedadeDto)
    enfermedad = await this.findOne(id);
    return enfermedad;
  }

  async remove(id: string) {
    const enfermedad = await this.findOne(id);

    await this.EnfermedadeModel1.deleteOne({_id: id});
    return enfermedad;
  }
}
