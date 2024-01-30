import { Module } from '@nestjs/common';
import { PlagasCuarentenariasService } from './plagas-cuarentenarias.service';
import { PlagasCuarentenariasController } from './plagas-cuarentenarias.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { PlagasCuarentenaria, PlagasCuarentenariaSchema } from './entities/plagas-cuarentenaria.entity';

@Module({
  controllers: [PlagasCuarentenariasController],
  providers: [PlagasCuarentenariasService],

  //Poner en cada uno Exactamente igual solo en se cambia el User
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: PlagasCuarentenaria.name,
          schema: PlagasCuarentenariaSchema
        }
      ]
    )
  ]
})
export class PlagasCuarentenariasModule {}
