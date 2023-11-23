import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HuertosService } from './huertos.service';
import { CreateHuertoDto } from './dto/create-huerto.dto';
import { UpdateHuertoDto } from './dto/update-huerto.dto';

@Controller('huertos')
export class HuertosController {
  constructor(private readonly huertosService: HuertosService) {}

  @Post()
  create(@Body() createHuertoDto: CreateHuertoDto) {
    return this.huertosService.create(createHuertoDto);
  }

  @Get()
  findAll() {
    return this.huertosService.findAll();
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
