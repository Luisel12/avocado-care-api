import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePlagasCuarentenariaDto } from './dto/create-plagas-cuarentenaria.dto';
import { UpdatePlagasCuarentenariaDto } from './dto/update-plagas-cuarentenaria.dto';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { PlagasCuarentenaria } from './entities/plagas-cuarentenaria.entity';


@Injectable()
export class PlagasCuarentenariasService {
      constructor(
        @InjectModel(PlagasCuarentenaria.name) private PlagasCuarentenariaModel1: Model<PlagasCuarentenaria>
      ) {}

      async create(createPlagasCuarentenariaDto: CreatePlagasCuarentenariaDto): Promise<PlagasCuarentenaria> {
        try {
          const plagasCuarentenaria = await this.PlagasCuarentenariaModel1.create(createPlagasCuarentenariaDto);
          return plagasCuarentenaria;
        } catch (error) {
          console.log(error);
          if (error.code === 11000) {
            throw new BadRequestException(`${createPlagasCuarentenariaDto.id_Huerto, createPlagasCuarentenariaDto.id_Plagas} ya está registrado`);
          }
          throw new InternalServerErrorException('Ocurrió un error al crear la Plaga Cuarentenaria');
        }

    }

  async findAll() {
    const plagasCuarentenaria = await this.PlagasCuarentenariaModel1.find();
      return plagasCuarentenaria;

  }

  async findOne(id: string) {
    const PlagasCuarentenaria = await this.PlagasCuarentenariaModel1.findById(id);
    if(!PlagasCuarentenaria)

    throw new NotFoundException("El ID resivido no existe");
    return PlagasCuarentenaria;
  }

  async update(id: string, updatePlagasCuarentenariaDto: UpdatePlagasCuarentenariaDto): Promise <PlagasCuarentenaria>{
  let PlagasCuarentenaria= await this.findOne(id);
    if(id != updatePlagasCuarentenariaDto._id)
    throw new BadRequestException("Los IDs no coinciden")

    await this.PlagasCuarentenariaModel1.updateOne({_id: id}, updatePlagasCuarentenariaDto)
    PlagasCuarentenaria= await this.findOne(id);
    return PlagasCuarentenaria;
  }

  async remove(id: string) {
    const PlagasCuarentenaria = await this.findOne(id);

    await this.PlagasCuarentenariaModel1.deleteOne({_id: id});
    return PlagasCuarentenaria;
  }
}
