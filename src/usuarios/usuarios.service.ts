import { Injectable } from '@nestjs/common';
import { UserInterface } from './usuarios.interface';
@Injectable()
export class UsuarioService {
  getUsers(): UserInterface[] {
    return [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      {
        "id": 3,
        "name": "Bob Johnson",
        "email": "bob@example.com"
      }
    ];
  }
}
