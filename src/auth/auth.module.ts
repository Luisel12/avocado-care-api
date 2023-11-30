import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/auth.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService],

  //Poner en cada uno Exactamente igual solo en se cambia el User
  imports: [ 
    MongooseModule.forFeature( 
      [
        { 
          name: User.name, 
          schema: UserSchema
        }
      ]
    )
  ]
})
export class AuthModule {}
