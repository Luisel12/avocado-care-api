import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Request  } from '@nestjs/common';
import { PlagasService } from './plagas.service';
import { CreatePlagasDto } from './dto/create-plagas.dto';
import { UpdatePlagasDto } from './dto/update-plagas.dto';
import { ListResponse } from './interfaces/list-response.interface';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { createjwt } from 'src/shared/services/jwtvalidator/jwtvalidator.service';
import { JwtService } from '@nestjs/jwt';
import { PlagasResponse } from './interfaces/plagas-response.interface';

//esto va en todas la carpetas
@Controller('api/v1/plagas')
export class PlagasController {
  constructor(private readonly plagasService: PlagasService, private jwt:JwtService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createPlagasDto: CreatePlagasDto, @Request()req: Request) {
    const plaga =  this.plagasService.create(createPlagasDto);
    const plagacreate = req ["user"]

    return {
      plagas : plaga,
      token: createjwt({id: plagacreate._id}, this.jwt)
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request()req: Request): Promise<ListResponse> {
    const Plagas = await this.plagasService.findAll();
    const plagaall =  req ["user"]
    return {
      plagas: Plagas,
      token: createjwt({id: plagaall._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: Request): Promise<PlagasResponse> {
    const plagaid = req["user"];
    return{
      plagasR: await this.plagasService.findOne(id),
      token:createjwt({id: plagaid._id}, this.jwt)
    } ;
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlagasDto: UpdatePlagasDto, @Request() req: Request): Promise<PlagasResponse>{
    const plagasup = req["user"];
    return{
      plagasR: await this.plagasService.update(id, updatePlagasDto),
      token:createjwt({id: plagasup._id}, this.jwt)
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string,@Request() req: Request) {
    const plagasdel = req["user"];
    return{
      plagasR: await this.plagasService.remove(id),
      token:createjwt({id: plagasdel._id}, this.jwt)
    } ;
  }
}
