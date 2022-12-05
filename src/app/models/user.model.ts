import { Materia } from './materia.model';
import { Nota } from './notas.model';
export interface User {
  id: number;
  nombre: string;
  email: string;
  password: string;
  apellido: string;
  cedula: number;
  rol: string;
  materia: Materia[];
  notasId: Nota[];
}

export interface CreateUserDto extends Omit<User, 'id'> {
  //notasId: number[];
}
