import { Module } from '@nestjs/common';
import { HuertosService } from './huertos.service';
import { HuertosController } from './huertos.controller';

@Module({
  controllers: [HuertosController],
  providers: [HuertosService],
})
export class HuertosModule {}
