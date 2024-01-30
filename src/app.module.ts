import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { HuertosModule } from './huertos/huertos.module';

import { AlertasPlagasModule } from './alertas_plagas/alertas_plagas.module';
import { PlagasModule } from './plagas/plagas.module';
import { AlertasEnfermedadesModule } from './alertas_enfermedades/alertas_enfermedades.module';
import { EnfermedadesModule } from './enfermedades/enfermedades.module';
import { DetallesNutrimentalesModule } from './detalles_nutrimentales/detalles_nutrimentales.module';
import { PlagasCuarentenariasModule } from './plagas-cuarentenarias/plagas-cuarentenarias.module';
import { NutrientesModule } from './nutrientes/nutrientes.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [ 
    ConfigModule.forRoot(),

    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DBNAME
    }),

    JwtModule.register({ 
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: {
        expiresIn:'30m'
      }
     }),

    AuthModule,
    HuertosModule,
    PlagasModule,
    AlertasPlagasModule,
    AlertasEnfermedadesModule,
    EnfermedadesModule,
    DetallesNutrimentalesModule,
    PlagasCuarentenariasModule,
    NutrientesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
