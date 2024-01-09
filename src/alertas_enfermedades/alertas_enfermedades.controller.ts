import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlertasEnfermedadesService } from './alertas_enfermedades.service';
import { CreateAlertasEnfermedadeDto } from './dto/create-alertas_enfermedade.dto';
import { UpdateAlertasEnfermedadeDto } from './dto/update-alertas_enfermedade.dto';

//esto va en todas la carpetas
@Controller('api/v1/alertas-enfermedades')
export class AlertasEnfermedadesController {
  constructor(private readonly alertasEnfermedadesService: AlertasEnfermedadesService) {}

  @Post()
  create(@Body() createAlertasEnfermedadeDto: CreateAlertasEnfermedadeDto) {
    return this.alertasEnfermedadesService.create(createAlertasEnfermedadeDto);
  }

  @Get()
  findAll() {
    return this.alertasEnfermedadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alertasEnfermedadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlertasEnfermedadeDto: UpdateAlertasEnfermedadeDto) {
    return this.alertasEnfermedadesService.update(+id, updateAlertasEnfermedadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alertasEnfermedadesService.remove(+id);
  }
}
