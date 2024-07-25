import { ItemPedido } from './itempedido';

// Definición de la enumeración para los posibles estados del pedido
export enum EstadoPedido {
  Pendiente = 'pendiente',
  EnProceso = 'en proceso',
  Enviado = 'enviado',
  Entregado = 'entregado'
}

export class Pedido {
  constructor(
    public id: number,
    public IdUsuario: string,  // Asumiendo que 'usuario' es una referencia al id del usuario
    public fechaPedido: Date,
    public estado: EstadoPedido = EstadoPedido.Pendiente, // Valor por defecto "pendiente"
    public total: number, // Precio total del pedido (Calculado)
    public items: ItemPedido[]
  ) {}
}