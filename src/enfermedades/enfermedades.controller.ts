import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnfermedadesService } from './enfermedades.service';
import { CreateEnfermedadeDto } from './dto/create-enfermedade.dto';
import { UpdateEnfermedadeDto } from './dto/update-enfermedade.dto';

@Controller('enfermedades')
export class EnfermedadesController {
  constructor(private readonly enfermedadesService: EnfermedadesService) {}

  @Post()
  create(@Body() createEnfermedadeDto: CreateEnfermedadeDto) {
    return this.enfermedadesService.create(createEnfermedadeDto);
  }

  @Get()
  findAll() {
    return this.enfermedadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enfermedadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnfermedadeDto: UpdateEnfermedadeDto) {
    return this.enfermedadesService.update(+id, updateEnfermedadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfermedadesService.remove(+id);
  }
}
