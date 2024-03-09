import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Request} from '@nestjs/common';
import { EnfermedadesService } from './enfermedades.service';
import { CreateEnfermedadeDto } from './dto/create-enfermedade.dto';
import { UpdateEnfermedadeDto } from './dto/update-enfermedade.dto';
import { ListResponse } from 'src/enfermedades/interfaces/list-response.interface';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { createjwt } from 'src/shared/services/jwtvalidator/jwtvalidator.service';
import { JwtService } from '@nestjs/jwt';
import { Enfermedade } from './entities/enfermedade.entity';
import { EnfermedadesResponse } from './interfaces/enfermedades-response.interface';

//esto va en todas la carpetas
@Controller('api/v1/enfermedades')
export class EnfermedadesController {
  constructor(private readonly enfermedadesService: EnfermedadesService, private jwt:JwtService) {}
  
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createEnfermedadeDto: CreateEnfermedadeDto, @Request()req: Request) {
    const enfermedad = this.enfermedadesService.create(createEnfermedadeDto);
    const enfer = req ["user"]
    return {
      detalles : enfermedad,
      token: createjwt({id: enfer._id}, this.jwt)
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll( @Request()req: Request): Promise<ListResponse> {
    const detalles = await this.enfermedadesService.findAll();
    const enferall =  req ["user"]
    return {
      detalles: detalles,
      token: createjwt({id: enferall._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: Request): Promise<EnfermedadesResponse> {
    const enferid = req["user"];

    return{
      enfermedades: await this.enfermedadesService.findOne(id),
      token:createjwt({id: enferid._id}, this.jwt)
    } 
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEnfermedadeDto: UpdateEnfermedadeDto, @Request()req: Request): Promise<EnfermedadesResponse> {
    const enferup = req["user"];

    return{
      enfermedades : await this.enfermedadesService.update(id, updateEnfermedadeDto),
      token:createjwt({id: enferup._id}, this.jwt)
    } ;
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request()req: Request) {
    const enferdel = req ["user"]
    return{
      detalles : await this.enfermedadesService.remove(id),
      token:createjwt({id: enferdel._id}, this.jwt)
    } ;
  }
}
