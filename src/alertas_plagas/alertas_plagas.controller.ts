import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlertasPlagasService } from './alertas_plagas.service';
import { CreateAlertasPlagasDto } from './dto/create-alertas_plagas.dto';
import { UpdateAlertasPlagasDto } from './dto/update-alertas_plagas.dto';

@Controller('alertas-plagas')
export class AlertasPlagasController {
  constructor(private readonly alertasPlagasService: AlertasPlagasService) {}

  @Post()
  create(@Body() createAlertasPlagasDto: CreateAlertasPlagasDto) {
    return this.alertasPlagasService.create(createAlertasPlagasDto);
  }

  @Get()
  findAll() {
    return this.alertasPlagasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alertasPlagasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlertasPlagasDto: UpdateAlertasPlagasDto) {
    return this.alertasPlagasService.update(+id, updateAlertasPlagasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alertasPlagasService.remove(+id);
  }
}
