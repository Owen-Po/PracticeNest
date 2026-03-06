import { Controller, Get, Param } from '@nestjs/common';

@Controller('trabajador')
export class TrabajadorController {
 


  @Get()
  getAllTrabajador() {
    
  }

  @Get(':id')
  GetTrabajadorById(@Param('id') id: string){
   
}
  



}
