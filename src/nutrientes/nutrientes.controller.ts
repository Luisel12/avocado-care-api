import { Controller, Get, Post, Body, Patch, Param, Delete,Request, UseGuards } from '@nestjs/common';
import { NutrientesService } from './nutrientes.service';
import { CreateNutrienteDto } from './dto/create-nutriente.dto';
import { UpdateNutrienteDto } from './dto/update-nutriente.dto';
import { ListResponse } from 'src/nutrientes/interfaces/list-response.interface';
import { JwtService } from '@nestjs/jwt';
import { createjwt } from 'src/shared/services/jwtvalidator/jwtvalidator.service';

import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { HuertoResponse } from 'src/huertos/interfaces/huertos-response.interface';
import { NutrienteResponse } from './interfaces/nutrientes-response.interface';


//esto va en todas la carpetas
@Controller('api/v1/nutrientes')
export class NutrientesController {
  constructor(private readonly nutrientesService: NutrientesService, private jwt:JwtService) {}


  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createNutrienteDto: CreateNutrienteDto, @Request()req: Request) {
    const nutriente =  this.nutrientesService.create(createNutrienteDto);
    const nutricreate = req ['user']

    return {
      nutrientes: nutriente,
      token: createjwt({id: nutricreate._id}, this.jwt)
    }

  }


  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request()req: Request): Promise<ListResponse> {

    const nutrientes = await this.nutrientesService.findAll();
    const nutriall = req ['user']
    return {
      nutrientes: nutrientes,
      token: createjwt({id: nutriall._id}, this.jwt)
    };
  }


  @UseGuards(AuthGuard)
  @Get('bynutriid/:id_infonutri')
  async findbyuserid(@Param('id_infonutri') id: string, @Request() req: Request): Promise<ListResponse> {
    const utriid = req["user"];

    return {
      nutrientes: await this.nutrientesService.findbyuserid(id),
      token:createjwt({id: utriid._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: Request): Promise<NutrienteResponse> {
   const nutrio = req['user']

    return{
      nutriente: await this.nutrientesService.findOne(id),
      token:createjwt({id: nutrio._id}, this.jwt)
    } ;
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNutrienteDto: UpdateNutrienteDto, @Request() req: Request): Promise<NutrienteResponse>{
    const nutriup = req['user']
    console.log('info nutriente', nutriup)
    return{
      nutriente: await this.nutrientesService.update(id, updateNutrienteDto),
      token:createjwt({id: nutriup._id}, this.jwt)

    };
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request()req: Request) {
    const nutridel = req ["user"]
    return{
      nutriente: await this.nutrientesService.remove(id),
      token:createjwt({id: nutridel._id}, this.jwt)
    } ;
  }
}
