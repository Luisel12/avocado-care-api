import { Module } from '@nestjs/common';
import { AlertasPlagasService } from './alertas_plagas.service';
import { AlertasPlagasController } from './alertas_plagas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AlertasPlagas, AlertasPlagasSchema } from './entities/alertas_plagas.entity';

@Module({
  controllers: [AlertasPlagasController],
  providers: [AlertasPlagasService],

  //Poner en cada uno Exactamente igual solo en se cambia el User
  imports: [ 
    MongooseModule.forFeature( 
      [
        { 
          name: AlertasPlagas.name, 
          schema: AlertasPlagasSchema
        }
      ]
    )
  ]
})
export class AlertasPlagasModule {}
