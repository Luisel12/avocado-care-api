import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { DetallesNutrimentalesService } from './detalles_nutrimentales.service';
import { CreateDetallesNutrimentaleDto } from './dto/create-detalles_nutrimentale.dto';
import { UpdateDetallesNutrimentaleDto } from './dto/update-detalles_nutrimentale.dto';
import { ListResponse } from 'src/detalles_nutrimentales/interfaces/list-response.interface';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { createjwt } from 'src/shared/services/jwtvalidator/jwtvalidator.service';
import { JwtService } from '@nestjs/jwt';
import { Nutriente } from 'src/nutrientes/entities/nutriente.entity';
import { NutrienteResponse } from 'src/nutrientes/interfaces/nutrientes-response.interface';
import { DetallesResponse } from './interfaces/detalles_nutrimentales-response.interface';

//esto va en todas la carpetas
@Controller('api/v1/detalles-nutrimentales')
export class DetallesNutrimentalesController {
  constructor(private readonly detallesNutrimentalesService: DetallesNutrimentalesService, private jwt:JwtService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createDetallesNutrimentaleDto: CreateDetallesNutrimentaleDto, @Request()req: Request) {
    const detalles = await this.detallesNutrimentalesService.create(createDetallesNutrimentaleDto);
    const detalle = req ["user"];
    return {
      detallesnutri: detalles,

      token: createjwt({id: detalle._id}, this.jwt)
    };
  }
  
  
  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Param('id_usuario') id_usuario: string, @Request()req: Request): Promise<ListResponse> {
    const nutrimentales = await this.detallesNutrimentalesService.findAll();
    const detallesall =  req ["user"]
    return {
      nutrientes: nutrimentales,
      token: createjwt({id: detallesall._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: Request): Promise<DetallesResponse> {
    const detalleo = req["user"];

    return {
      detallesnutri: await  this.detallesNutrimentalesService.findOne(id),
      token:createjwt({id: detalleo._id}, this.jwt)

    }
    ;
  }

  @UseGuards(AuthGuard)
  @Get('byhuertoid/:id_huerto')
  async findbyhuertoid(@Param('id_huerto') id: string, @Request() req: Request): Promise<ListResponse> {
    const huerto = req["user"];

    return {
      nutrientes: await this.detallesNutrimentalesService.findbyhuertoid(id),
      token:createjwt({id: huerto._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get('byinfonutriid/:id_infonutri')
  async findbyinfonutriid(@Param('id_infonutri') id: string, @Request() req: Request): Promise<ListResponse> {
    const infonutriente = req["user"];

    return {
      nutrientes: await this.detallesNutrimentalesService.findbynutrienteid(id),
      token:createjwt({id: infonutriente._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDetallesNutrimentaleDto: UpdateDetallesNutrimentaleDto, @Request() req: Request): Promise<DetallesResponse> {
    const detalleup = req['user']
    console.log('info detalles', detalleup)
    return{
      detallesnutri: await this.detallesNutrimentalesService.update(id, updateDetallesNutrimentaleDto),
      token:createjwt({id: detalleup._id}, this.jwt)
    } ;
  }


  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request()req: Request) {
    const detalledel = req['user']
    return{
      detallesnutri: await this.detallesNutrimentalesService.remove(id),
      token:createjwt({id: detalledel._id}, this.jwt)
    } ;
  }
}
