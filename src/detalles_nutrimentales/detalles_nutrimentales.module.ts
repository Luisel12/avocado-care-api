import { Module } from '@nestjs/common';
import { DetallesNutrimentalesService } from './detalles_nutrimentales.service';
import { DetallesNutrimentalesController } from './detalles_nutrimentales.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { DetallesNutrimentale, DetallesNutrimentaleSchema } from './entities/detalles_nutrimentale.entity';



@Module({
  controllers: [DetallesNutrimentalesController],
  providers: [DetallesNutrimentalesService],

    //Poner en cada uno Exactamente igual solo en se cambia el User
    imports: [ 
      MongooseModule.forFeature( 
        [
          { 
            name: DetallesNutrimentale.name, 
            schema: DetallesNutrimentaleSchema
          }
        ]
      )
    ]
})
export class DetallesNutrimentalesModule {}
