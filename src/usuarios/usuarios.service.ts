// src/usuario/usuario.service.ts

import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/models/usuario'; 
import { ItemPedido } from 'src/models/itempedido';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = []; // Inicializo

  // Registrar un nuevo usuario
  registrarUsuario(nuevoUsuario: Usuario): Usuario {
    // Verificar si el usuario ya existe por correo electrónico
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].correoElectronico === nuevoUsuario.correoElectronico) {
        console.log('El usuario ya existe con ese correo electrónico.');
      }
    }

    // Agrego el nuevo usuario a la lista
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  // Obtengo un usuario por id
  obtenerUsuario(id: number): Usuario {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id === id) {
        return this.usuarios[i];
      }
    }
    console.log('Usuario no encontrado');
  }

  // Obtengo todos los usuarios, sin las contraseñas

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

  // Elimino un usuario por id
  eliminarUsuario(id: number): void {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id === id) {
        this.usuarios.splice(i, 1);
      }
    }
  }
}
