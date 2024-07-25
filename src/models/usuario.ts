import { Pedido } from './pedido';
export class Usuario {
    constructor(
      public id: number,
      public nombre: string,
      public correoElectronico: string,
      public contrasena: string,
      public direccion: string = '',
      public historialPedidos: Pedido[] = [],

    ) {}
  }
  