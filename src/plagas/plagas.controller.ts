import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlagasService } from './plagas.service';
import { CreatePlagasDto } from './dto/create-plagas.dto';
import { UpdatePlagasDto } from './dto/update-plagas.dto';

//esto va en todas la carpetas
@Controller('api/v1/plagas')
export class PlagasController {
  constructor(private readonly plagasService: PlagasService) {}

  @Post()
  create(@Body() createPlagasDto: CreatePlagasDto) {
    return this.plagasService.create(createPlagasDto);
  }

  @Get()
  findAll() {
    return this.plagasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plagasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlagasDto: UpdatePlagasDto) {
    return this.plagasService.update(+id, updatePlagasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plagasService.remove(+id);
  }
}
