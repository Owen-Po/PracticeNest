import { Controller, Get, Param } from '@nestjs/common';

@Controller('trabajador')
export class TrabajadorController {
  private trabajador = ['ingeniero', 'soldador', 'conductor'];
  

  @Get()
  getAllTrabajador() {
    return this.trabajador;
  }

  @Get(':id')
  GetTrabajadorById(@Param('id') id: string){
    console.log({ id });
    return this.trabajador[id];
}
  



}
