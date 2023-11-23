import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetallesNutrimentalesService } from './detalles_nutrimentales.service';
import { CreateDetallesNutrimentaleDto } from './dto/create-detalles_nutrimentale.dto';
import { UpdateDetallesNutrimentaleDto } from './dto/update-detalles_nutrimentale.dto';

@Controller('detalles-nutrimentales')
export class DetallesNutrimentalesController {
  constructor(private readonly detallesNutrimentalesService: DetallesNutrimentalesService) {}

  @Post()
  create(@Body() createDetallesNutrimentaleDto: CreateDetallesNutrimentaleDto) {
    return this.detallesNutrimentalesService.create(createDetallesNutrimentaleDto);
  }

  @Get()
  findAll() {
    return this.detallesNutrimentalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detallesNutrimentalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetallesNutrimentaleDto: UpdateDetallesNutrimentaleDto) {
    return this.detallesNutrimentalesService.update(+id, updateDetallesNutrimentaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallesNutrimentalesService.remove(+id);
  }
}
