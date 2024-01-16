import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HuertosService } from './huertos.service';
import { CreateHuertoDto } from './dto/create-huerto.dto';
import { UpdateHuertoDto } from './dto/update-huerto.dto';

import { ListResponse } from 'src/huertos/interfaces/list-response.interface';

//esto va en todas la carpetas
@Controller('api/v1/huertos')
export class HuertosController {
  constructor(private readonly huertosService: HuertosService) {}

  @Post()
  create(@Body() createHuertoDto: CreateHuertoDto) {
    return this.huertosService.create(createHuertoDto);
  }

  @Get()
  async findAll(): Promise<ListResponse>{
    const huertos = await this.huertosService.findAll();

      return {
        huertos: huertos,
        token: "jwt mamalon"
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.huertosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHuertoDto: UpdateHuertoDto) {
    return this.huertosService.update(+id, updateHuertoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.huertosService.remove(+id);
  }
}
