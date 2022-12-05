import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateHorariodto, Horario } from '../models/horario.model';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

 //private url = 'https://protected-beyond-99664.herokuapp.com/horario';
 private url = 'http://localhost:3000/horario';
 constructor(private http: HttpClient) { }

 create(data: CreateHorariodto){
  console.log(data);
   return this.http.post<Horario>(this.url, data);
 }
}
