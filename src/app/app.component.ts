import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'colegioMixtoComunal';

  constructor(
    private tokenService: TokenService,
    private authService: AuthService) {}

  ngOnInit(): void {
    const token = this.tokenService.getToken();
    const email = this.tokenService.getEmail();
    if (token && email) {
      this.authService.profile(email)
      .subscribe()
    }
  }
}
