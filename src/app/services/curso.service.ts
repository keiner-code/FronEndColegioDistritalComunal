import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso, CreateCursodto } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

 //private url = 'https://protected-beyond-99664.herokuapp.com/cursos';
 private url = 'http://localhost:3000/cursos';
 constructor(private http: HttpClient) { }

 create(data: CreateCursodto){
   return this.http.post<Curso>(this.url, data);
 }
 getAll(){
   return this.http.get<Curso[]>(this.url);
 }
}
