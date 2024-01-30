import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NutrientesService } from './nutrientes.service';
import { CreateNutrienteDto } from './dto/create-nutriente.dto';
import { UpdateNutrienteDto } from './dto/update-nutriente.dto';
import { ListResponse } from 'src/nutrientes/interfaces/list-response.interface';

//esto va en todas la carpetas
@Controller('api/v1/nutrientes')
export class NutrientesController {
  constructor(private readonly nutrientesService: NutrientesService) {}

  @Post()
  create(@Body() createNutrienteDto: CreateNutrienteDto) {
    return this.nutrientesService.create(createNutrienteDto);
  }

  @Get()
  async findAll(): Promise<ListResponse> {
    const nutrientes = await this.nutrientesService.findAll();

    return {
      nutrientes: nutrientes,
      token: 'jwt mamalon',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nutrientesService.findOne( id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNutrienteDto: UpdateNutrienteDto) {
    return this.nutrientesService.update(id, updateNutrienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nutrientesService.remove(id);
  }
}
