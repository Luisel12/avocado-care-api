import { Module } from '@nestjs/common';
import { HuertosService } from './huertos.service';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { HuertosController } from './huertos.controller';
import { Huerto, HuertoSchema } from './entities/huerto.entity';

@Module({
  controllers: [HuertosController],
  providers: [HuertosService],

  //Poner en cada uno Exactamente igual solo en se cambia el User
  imports: [ 
    MongooseModule.forFeature( 
      [
        { 
          name: Huerto.name, 
          schema: HuertoSchema
        }
      ]
    )
  ]

})
export class HuertosModule {}
