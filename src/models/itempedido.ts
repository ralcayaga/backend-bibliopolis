import { Libro } from './libro'; // Asegúrate de que la ruta es correcta

export class ItemPedido {
  constructor(
    public libro: Libro,       // Libro que forma parte del pedido
    public cantidad: number    // Cantidad de libros del mismo tipo en el pedido
  ) {}
}
