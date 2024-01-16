import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
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

  async findOne(id: number) {
    return `This action returns a #${id} plagasCuarentenaria`;
  }

  async update(id: number, updatePlagasCuarentenariaDto: UpdatePlagasCuarentenariaDto): Promise <PlagasCuarentenaria>{
    return ;
  }

  async remove(id: number) {
    return `This action removes a #${id} plagasCuarentenaria`;
  }
}
