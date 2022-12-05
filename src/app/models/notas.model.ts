export interface Nota {
  id: number;
  nota1: number;
  nota2: number;
  nota3: number;
  userId: number;
};

export interface CreateNotadto extends Omit<Nota, 'id'> {}
export interface UpdateNotadto extends Omit<Nota, 'id' | 'userId'> {}

/* export interface SearchContext {
  textContext: string,
  placeholder: string,
  formatInput: string
} */
