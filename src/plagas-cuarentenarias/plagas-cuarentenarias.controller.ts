import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlagasCuarentenariasService } from './plagas-cuarentenarias.service';
import { CreatePlagasCuarentenariaDto } from './dto/create-plagas-cuarentenaria.dto';
import { UpdatePlagasCuarentenariaDto } from './dto/update-plagas-cuarentenaria.dto';

@Controller('plagas-cuarentenarias')
export class PlagasCuarentenariasController {
  constructor(private readonly plagasCuarentenariasService: PlagasCuarentenariasService) {}

  @Post()
  create(@Body() createPlagasCuarentenariaDto: CreatePlagasCuarentenariaDto) {
    return this.plagasCuarentenariasService.create(createPlagasCuarentenariaDto);
  }

  @Get()
  findAll() {
    return this.plagasCuarentenariasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plagasCuarentenariasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlagasCuarentenariaDto: UpdatePlagasCuarentenariaDto) {
    return this.plagasCuarentenariasService.update(+id, updatePlagasCuarentenariaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plagasCuarentenariasService.remove(+id);
  }
}
