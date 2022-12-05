import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materia, CreateMateriadto } from '../models/materia.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  //private url = 'https://protected-beyond-99664.herokuapp.com/materia';
 private url = 'http://localhost:3000/materia';
 constructor(private http: HttpClient) { }

 create(data: CreateMateriadto){
   return this.http.post<Materia>(this.url, data);
 }
 getAll(){
  return this.http.get<Materia[]>(this.url);
 }
 getOne(id: number){
  return this.http.get<Materia>(`${this.url}/${id}`);
 }
}
