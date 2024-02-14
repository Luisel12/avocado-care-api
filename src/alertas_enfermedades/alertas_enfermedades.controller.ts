import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request  } from '@nestjs/common';
import { AlertasEnfermedadesService } from './alertas_enfermedades.service';
import { CreateAlertasEnfermedadeDto } from './dto/create-alertas_enfermedade.dto';
import { UpdateAlertasEnfermedadeDto } from './dto/update-alertas_enfermedade.dto';
import { Enfermedade } from 'src/enfermedades/entities/enfermedade.entity';
import { ListResponse } from './interfaces/list-response.interface';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { createjwt } from 'src/shared/services/jwtvalidator/jwtvalidator.service';
import { JwtService } from '@nestjs/jwt';
import { AlertasEnfResponse } from './interfaces/alertas_enfermedades-response.interface';

//esto va en todas la carpetas
@Controller('api/v1/alertas-enfermedades')
export class AlertasEnfermedadesController {
  constructor(private readonly alertasEnfermedadesService: AlertasEnfermedadesService, private jwt:JwtService) {}

  @Post()
  create(@Body() createAlertasEnfermedadeDto: CreateAlertasEnfermedadeDto) {
    return this.alertasEnfermedadesService.create(createAlertasEnfermedadeDto);
  }

  @Get()
  async findAll(@Request()req: Request): Promise<ListResponse> {
    const alertas = await this.alertasEnfermedadesService.findAll();
    const enfermadadall =  req ["user"]
    return {
      alertas: alertas,
      token: createjwt({id: enfermadadall._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: Request): Promise<AlertasEnfResponse> {
    const detalleo = req["user"];
    return {
      alertasenf: await  this.alertasEnfermedadesService.findOne(id),
      token:createjwt({id: detalleo._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get('byhuertoid/:id_huerto')
  async findbyhuertoid(@Param('id_huerto') id: string, @Request() req: Request): Promise<ListResponse> {
    const huerto = req["user"];

    return {
      alertas: await this.alertasEnfermedadesService.findbyhuertoid(id),
      token:createjwt({id: huerto._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get('byenfermedadid/:id_enfermades')
  async findbyenfid(@Param('id_enfermedades') id: string, @Request() req: Request): Promise<ListResponse> {
    const enfermedad = req["user"];

    return {
      alertas: await this.alertasEnfermedadesService.findbyenfid(id),
      token:createjwt({id: enfermedad._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAlertasEnfermedadeDto: UpdateAlertasEnfermedadeDto, @Request() req: Request): Promise<AlertasEnfResponse>{
    const enfermedadup = req['user']
    console.log('info detalles', enfermedadup)
    return{
      alertasenf: await this.alertasEnfermedadesService.update(id, updateAlertasEnfermedadeDto),
      token:createjwt({id: enfermedadup._id}, this.jwt)
    } ;
  }


  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request()req: Request) {
    const enfermedaddel = req['user']
    return{
      detallesnutri: await this.alertasEnfermedadesService.remove(id),
      token:createjwt({id: enfermedaddel._id}, this.jwt)
     } ;
  }
}
