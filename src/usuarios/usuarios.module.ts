import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuarioService } from './usuarios.service';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [UsuarioService],
})
export class UsuariosModule { }
