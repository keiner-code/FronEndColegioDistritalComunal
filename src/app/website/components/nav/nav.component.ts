import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  profile: User | null = null;
  activateMenu:boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.user$
    .subscribe(profile => this.profile = profile);
  }
  activeMenu(){
    this.activateMenu = !this.activateMenu;
  }
  closeSession(){
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['/home']);
  }
}
