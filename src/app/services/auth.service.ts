import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from '../services/token.service';
import { tap, switchMap, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private url = 'https://protected-beyond-99664.herokuapp.com';
  private url = 'http://localhost:3000';
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  login(email: string, password: string) {
    const user = this.http.post<Auth>(`${this.url}/auth/login`,{email,password})
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    )
    return user;
  }

  profile(email: string) {
      return this.http.get<User>(`${this.url}/users/find/${email}`)
      .pipe(
        tap(user => {
          this.user.next(user);
          this.tokenService.saveEmail(email)
        }));
  }

  loginAngGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(() => this.profile(email))
    )
  }
  logout() {
    this.tokenService.removeToken();
    this.tokenService.removeEmail();
    this.user.next(null);
  }
}
