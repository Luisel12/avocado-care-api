import { Controller, Get, Post, Body, Patch, Param, Delete , UseGuards, Request} from '@nestjs/common';
import { PlagasCuarentenariasService } from './plagas-cuarentenarias.service';
import { CreatePlagasCuarentenariaDto } from './dto/create-plagas-cuarentenaria.dto';
import { UpdatePlagasCuarentenariaDto } from './dto/update-plagas-cuarentenaria.dto';
import { ListResponse } from 'src/plagas-cuarentenarias/interfaces/list-response.interface';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { createjwt } from 'src/shared/services/jwtvalidator/jwtvalidator.service';
import { JwtService } from '@nestjs/jwt';
import { AlertasPlaResponse } from 'src/alertas_plagas/interfaces/alertas_plagas-response.interface';
import { PlagasCuResponse } from './interfaces/plagas-cuarentenarias-response.interface';

//esto va en todas la carpetas
@Controller('api/v1/plagas-cuarentenarias')
export class PlagasCuarentenariasController {
  constructor(private readonly plagasCuarentenariasService: PlagasCuarentenariasService, private jwt:JwtService) {}

  @Post()
  create(@Body() createPlagasCuarentenariaDto: CreatePlagasCuarentenariaDto) {
    return this.plagasCuarentenariasService.create(createPlagasCuarentenariaDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request()req: Request): Promise<ListResponse> {
    const plagasCuarentenarias = await this.plagasCuarentenariasService.findAll();
    const plagascuall =  req ["user"]
    return {
      plagascu: plagasCuarentenarias,
      token: createjwt({id: plagascuall._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: Request): Promise<PlagasCuResponse> {
    const plagascuid = req["user"];
    return {
      plagasCuR: await this.plagasCuarentenariasService.findOne(id),
      token: createjwt({id: plagascuid._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get('byhuertoid/:id_huerto')
  async findbyhuertoid(@Param('id_huerto') id: string, @Request() req: Request): Promise<ListResponse> {
    const huerto = req["user"];

    return {
      plagascu: await this.plagasCuarentenariasService.findbyhuertoid(id),
      token:createjwt({id: huerto._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Get('byplagaid/:id_plagas')
  async findbyplagaid(@Param('id_plagas') id: string, @Request() req: Request): Promise<ListResponse> {
    const plagaid = req["user"];

    return {
      plagascu: await this.plagasCuarentenariasService.findbyplagaid(id),
      token:createjwt({id: plagaid._id}, this.jwt)
    };
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlagasCuarentenariaDto: UpdatePlagasCuarentenariaDto, @Request() req: Request): Promise<PlagasCuResponse> {
    const plagascuup = req['user'];
    console.log('info plagas', plagascuup)
    return{
      plagasCuR: await this.plagasCuarentenariasService.update(id, updatePlagasCuarentenariaDto),
      token:createjwt({id: plagascuup._id}, this.jwt)
    } ;
  }

  @Delete(':id')
  async remove(@Param('id') id: string,  @Request() req: Request) {
    const plagacuel = req ["user"]
    return{
      alertaplagas: await this.plagasCuarentenariasService.remove(id),
      token:createjwt({id: plagacuel._id}, this.jwt)
    } ;
  }
}
