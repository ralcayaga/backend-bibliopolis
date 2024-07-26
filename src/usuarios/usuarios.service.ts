// src/usuario/usuario.service.ts

import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { Usuario } from 'src/models/usuario'; // Asegúrate de que la ruta es correcta
import { ItemPedido } from 'src/models/itempedido';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = []; // Aquí se almacenan los usuarios en memoria

  // Registrar un nuevo usuario
  registrarUsuario(nuevoUsuario: Usuario): Usuario {
    // Verificar si el usuario ya existe por correo electrónico
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].correoElectronico === nuevoUsuario.correoElectronico) {
        console.log('El usuario ya existe con ese correo electrónico.');
      }
    }

    // Agregar el nuevo usuario a la lista
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  // Obtener un usuario por ID
  obtenerUsuario(id: number): Usuario {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id === id) {
        return this.usuarios[i];
      }
    }
    console.log('Usuario no encontrado');
  }

  // Obtener todos los usuarios, sin las contraseñas

  obtenerTodosUsuarios(): any[] {
    const usuariosSinContrasena = [];
    for (let i = 0; i < this.usuarios.length; i++) {
      usuariosSinContrasena.push({
        id: this.usuarios[i].id,
        nombre: this.usuarios[i].nombre,
        correoElectronico: this.usuarios[i].correoElectronico,
        direccion: this.usuarios[i].direccion,
        historialPedidos: this.usuarios[i].historialPedidos,
      });
    }
    return usuariosSinContrasena;
  }

  // Eliminar un usuario por ID
  eliminarUsuario(id: number): boolean {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id === id) {
        this.usuarios.splice(i, 1);
        return true; // Usuario eliminado con éxito
      }
    }
    return false; // Usuario no encontrado
  }
}
