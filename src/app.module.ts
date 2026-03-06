import { Module } from '@nestjs/common';
import { TrabajadorModule } from './trabajador/trabajador.module';

@Module({
  imports: [TrabajadorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
