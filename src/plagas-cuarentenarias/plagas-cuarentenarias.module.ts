import { Module } from '@nestjs/common';
import { PlagasCuarentenariasService } from './plagas-cuarentenarias.service';
import { PlagasCuarentenariasController } from './plagas-cuarentenarias.controller';

@Module({
  controllers: [PlagasCuarentenariasController],
  providers: [PlagasCuarentenariasService],
})
export class PlagasCuarentenariasModule {}
