import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Request } from '@nestjs/common';
import { AlertasPlagasService } from './alertas_plagas.service';
import { CreateAlertasPlagasDto } from './dto/create-alertas_plagas.dto';
import { UpdateAlertasPlagasDto } from './dto/update-alertas_plagas.dto';
import { ListResponse } from 'src/alertas_plagas/interfaces/list-response.interface';
import { Plagas } from 'src/plagas/entities/plagas.entity';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { createjwt } from 'src/shared/services/jwtvalidator/jwtvalidator.service';
import { JwtService } from '@nestjs/jwt';
import { AlertasPlaResponse } from './interfaces/alertas_plagas-response.interface';

//esto va en todas la carpetas
@Controller('api/v1/alertas-plagas')
export class AlertasPlagasController {
  constructor(private readonly alertasPlagasService: AlertasPlagasService, private jwt:JwtService) {}

  @Post()
  create(@Body() createAlertasPlagasDto: CreateAlertasPlagasDto) {
    return this.alertasPlagasService.create(createAlertasPlagasDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request()req: Request): Promise<ListResponse> {
    const plagas = await this.alertasPlagasService.findAll();
    const plagasall =  req ["user"]
    return {
      alertaplagas: plagas,
      token: createjwt({id: plagasall._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: Request): Promise<AlertasPlaResponse> {
    const plagao = req["user"];
    return{
      alertaspla: await this.alertasPlagasService.findOne(id),
      token : createjwt({id: plagao._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get('byplagaid/:id_plagas')
  async findbyplagaid(@Param('id_plagas') id: string, @Request() req: Request): Promise<ListResponse> {
    const plagaid = req["user"];

    return {
      alertaplagas: await this.alertasPlagasService.findbyplagaid(id),
      token:createjwt({id: plagaid._id}, this.jwt)
    };
  }


  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAlertasPlagasDto: UpdateAlertasPlagasDto, @Request() req: Request): Promise<AlertasPlaResponse> {
    const altplagasu = req['user'];
    console.log('info plagas', altplagasu)
    return{
      alertaspla: await this.alertasPlagasService.update(id, updateAlertasPlagasDto),
      token:createjwt({id: altplagasu._id}, this.jwt)
    } ;
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request()req: Request) {
    const plagadel = req ["user"]
    return{
      alertaplagas: await this.alertasPlagasService.remove(id),
      token:createjwt({id: plagadel._id}, this.jwt)
    };
  }
}
