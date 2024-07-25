
export class Libro {
    constructor(
      public isbn: number,               // ISBN del libro, obligatorio y único
      public titulo: string,             // Título del libro, obligatorio
      public autor: string,              // Autor del libro, obligatorio
      public editorial: string,          // Editorial del libro
      public genero: string = '',        // Género literario del libro
      public precio: number,             // Precio del libro
      public descripcion: string,        // Descripción del libro
      public imagen: string,             // Ruta a la imagen de portada del libro
      public stock: number               // Cantidad de libros disponibles en stock
    ) {}
  }
  

