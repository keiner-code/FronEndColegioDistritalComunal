export interface Curso {
  id: string;
  nombre: string;
};

export interface CreateCursodto extends Omit<Curso, 'id'> {}
