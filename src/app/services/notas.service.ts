import { Injectable } from '@angular/core';
import { Nota, CreateNotadto, UpdateNotadto } from '../models/notas.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  //private url = 'https://protected-beyond-99664.herokuapp.com/notas';
  private url = 'http://localhost:3000/notas';
  constructor(private http: HttpClient) { }

  create(data: CreateNotadto){
    return this.http.post<Nota>(this.url, data);
  }
  update(id: number, changes: UpdateNotadto){
      return this.http.put(`${this.url}/${id}`,changes);
  }
  findOne(id: number){
    return this.http.get<Nota>(`${this.url}/${id}`);
  }
}
