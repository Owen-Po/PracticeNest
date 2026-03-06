import { Controller, Get, Param } from '@nestjs/common';
import { TrabajadorService } from './trabajador.service';

@Controller('trabajador')
export class TrabajadorController {
  constructor(private readonly TrabajadorService: TrabajadorService) {}

  @Get()
  getAllTrabajador() {
    return this.TrabajadorService.findAll();
  }

  @Get(':id')
  GetTrabajadorById(@Param('id') id: string) {
    return this.TrabajadorService.findById(+id);
  }
}
