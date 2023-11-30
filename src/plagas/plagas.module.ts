import { Module } from '@nestjs/common';
import { PlagasService } from './plagas.service';
import { PlagasController } from './plagas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Plagas, PlagasSchema } from './entities/plagas.entity';

@Module({
  controllers: [PlagasController],
  providers: [PlagasService],

  //Poner en cada uno Exactamente igual solo en se cambia el User
  imports: [ 
    MongooseModule.forFeature( 
      [
        { 
          name: Plagas.name, 
          schema: PlagasSchema
        }
      ]
    )
  ]
})
export class PlagasModule {}
