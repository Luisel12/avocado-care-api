import { Module } from '@nestjs/common';
import { EnfermedadesService } from './enfermedades.service';
import { EnfermedadesController } from './enfermedades.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Enfermedade, EnfermedadeSchema } from './entities/enfermedade.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [EnfermedadesController],
  providers: [EnfermedadesService],

  //Poner en cada uno Exactamente igual solo en se cambia el User
  imports: [ 
    AuthModule,
    MongooseModule.forFeature( 
      [
        { 
          name: Enfermedade.name, 
          schema: EnfermedadeSchema
        }
      ]
    )
  ]
  
})
export class EnfermedadesModule {}
