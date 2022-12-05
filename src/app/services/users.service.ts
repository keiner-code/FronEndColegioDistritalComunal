import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserDto, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //private url = 'https://protected-beyond-99664.herokuapp.com/users';
  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  create(data: CreateUserDto) {
    return this.http.post(this.url, data);
  }
  getAll(){
    return this.http.get<User[]>(this.url);
  }
  getOne(id: number){
    return this.http.get<User>(`${this.url}/${id}`);
  }
  getOneCedula(id: number){
    return this.http.get<User>(`${this.url}/search/${id}`);
  }
  getOneEmail(email: string){
    return this.http.get<User>(`${this.url}/find/${email}`);
  }
}
