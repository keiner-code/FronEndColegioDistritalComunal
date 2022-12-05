import { User } from './user.model';
import { Horario } from './horario.model';
export interface Materia {
  id: number;
  materia: string;
  descripcion: string;
  user: User[];
  horario: Horario
};

export interface CreateMateriadto extends Omit<Materia, 'id'> {}

