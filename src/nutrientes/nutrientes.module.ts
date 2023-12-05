import { Module } from '@nestjs/common';
import { NutrientesService } from './nutrientes.service';
import { NutrientesController } from './nutrientes.controller';
import { Nutriente, NutrienteSchema } from './entities/nutriente.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [NutrientesController],
  providers: [NutrientesService],

  //Poner en cada uno Exactamente igual solo en se cambia el User
  imports: [ 
    MongooseModule.forFeature( 
      [
        { 
          name: Nutriente.name, 
          schema: NutrienteSchema
        }
      ]
    )
  ]
})
export class NutrientesModule {}
