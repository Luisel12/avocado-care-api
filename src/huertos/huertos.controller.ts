import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Request } from '@nestjs/common';
import { HuertosService } from './huertos.service';
import { CreateHuertoDto } from './dto/create-huerto.dto';
import { UpdateHuertoDto } from './dto/update-huerto.dto';

import { ListResponse } from 'src/huertos/interfaces/list-response.interface';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { createjwt } from 'src/shared/services/jwtvalidator/jwtvalidator.service';
import { JwtService } from '@nestjs/jwt';
import { HuertoResponse } from './interfaces/huertos-response.interface';
//esto va en todas la carpetas
@Controller('api/v1/huertos')
export class HuertosController {
  constructor(private readonly huertosService: HuertosService, private jwt:JwtService) {}

  @Post()
  create(@Body() createHuertoDto: CreateHuertoDto) {
    return this.huertosService.create(createHuertoDto);
  }


  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Param('id_usuario') id_usuario: string, @Request()req: Request): Promise<ListResponse>{
    const huertos = await this.huertosService.findAll();

    const userl =  req ["user"]
      return {
        huertos: huertos,
        token: createjwt({id: userl._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get(':id_usuario')
  async findOne(@Param('id_usuario') id: string, @Request() req: Request): Promise<HuertoResponse> {
    const user = req["user"];

    return {
      huerto: await this.huertosService.findOne(id),
      token:createjwt({id: user._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get('byuserid/:id_usuario')
  async findbyuserid(@Param('id_usuario') id: string, @Request() req: Request): Promise<ListResponse> {
    const user = req["user"];

    return {
      huertos: await this.huertosService.findbyuserid(id),
      token:createjwt({id: user._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHuertoDto: UpdateHuertoDto, @Request() req: Request): Promise<HuertoResponse> {
    const useru = req['user'];
    console.log('info usuario', useru)
    return{
      huerto: await this.huertosService.update(id, updateHuertoDto),
      token : createjwt({id: useru._id}, this.jwt)
    } ;
  }
  
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request()req: Request) {
    const useru = req ["user"]
    return{
      user: await this.huertosService.remove(id),
      token : createjwt({id: useru.id}, this.jwt)
    };
  }
}
