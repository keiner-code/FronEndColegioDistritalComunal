import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  saveEmail(email: string) {
    localStorage.setItem('email',email);
  }
  getEmail(){
    return localStorage.getItem('email');
  }
  removeEmail() {
    localStorage.removeItem('email');
  }
  getToken() {
    return localStorage.getItem('token')
  }
  removeToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('email')
  }
}
