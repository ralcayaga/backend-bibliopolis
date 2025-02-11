import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LibrosModule } from './libros/libros.module';

@Module({
  imports: [UsuariosModule, LibrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
