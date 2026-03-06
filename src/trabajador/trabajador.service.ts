import { Injectable } from '@nestjs/common';

@Injectable()
export class TrabajadorService {

  private trabajor = [{
    id: 1,
    nombre: "carlos",
    profesion: "arquitecto",
    edad: 27,
    
  },
  {
    id: 2,
    nombre: "lucia",
    profesion: "administradora",
    edad: 29,
  },
    {
      id: 3,
      nombre: "micaela",
      profesion: "secretaria",
      edad:"23",

  }
  
  
  ]

}
