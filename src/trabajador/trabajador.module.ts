import { Module } from '@nestjs/common';
import { TrabajadorController } from './trabajador.controller';

@Module({
  controllers: [TrabajadorController]
})
export class TrabajadorModule {}
