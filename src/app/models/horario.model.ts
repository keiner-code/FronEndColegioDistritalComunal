import { Curso } from './curso.model';
export interface Horario {
  id: string;
  dia: string;
  horaInicio: string;
  horaFin: string;
  materiaId: number;
  curso: Curso;
};

export interface CreateHorariodto extends Omit<Horario, 'id'> {}
