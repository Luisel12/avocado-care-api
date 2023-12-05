import { Module } from '@nestjs/common';
import { AlertasEnfermedadesService } from './alertas_enfermedades.service';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { AlertasEnfermedadesController } from './alertas_enfermedades.controller';
import { AlertasEnfermedade,AlertasEnfermedadesSchema  } from './entities/alertas_enfermedade.entity';

@Module({
  controllers: [AlertasEnfermedadesController],
  providers: [AlertasEnfermedadesService],

  //Poner en cada uno Exactamente igual solo en se cambia el User
  imports: [ 
    MongooseModule.forFeature( 
      [
        { 
          name: AlertasEnfermedade.name, 
          schema: AlertasEnfermedadesSchema
        }
      ]
    )
  ]

})
export class AlertasEnfermedadesModule {}
