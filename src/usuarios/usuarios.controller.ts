import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from 'src/usuarios/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuarioService) {}

  @Post()
  crearUsuario(@Body() usuario: Usuario): Usuario {
    return this.usuariosService.registrarUsuario(usuario);
  }

  @Get(':id')
  obtenerUsuario(@Param('id') id: number): Usuario {
    const usuario = this.usuariosService.obtenerUsuario(id);
    if (!usuario) {
      console.log(`Usuario con id ${id} no encontrado`);
    }
    return usuario;
  }

  @Get()
  obtenerTodosLosUsuarios(): Usuario[] {
    return this.usuariosService.obtenerTodosUsuarios();
  }

  @Delete(':id')
  eliminarUsuario(@Param('id') id: number): void {
    const resultado = this.usuariosService.eliminarUsuario(id);
    if (!resultado) {
      console.log(`Usuario con id ${id} no encontrado`);
    }
  }
}
