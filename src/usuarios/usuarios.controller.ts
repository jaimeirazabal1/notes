import { Controller, Get, Res, Render } from '@nestjs/common';
import { UsuarioService } from './usuarios.service';
import { UserInterface } from './usuarios.interface';
import { Response } from 'express';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuarioService) { }

  @Get('/list')
  @Render('list') // Ruta relativa a la carpeta de vistas de usuarios
  async list(@Res() res: Response): Promise<{ users: UserInterface[] }> {
    const users: UserInterface[] = await this.usuariosService.getUsers();
    return { users };
  }
}
