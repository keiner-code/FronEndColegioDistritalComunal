import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
       const value = this.form.value;
       this.authService.loginAngGet(value.email, value.password)
       .subscribe({
         next: () => this.router.navigate(['/home']),
         error: (err) => {console.log(err)}
       });
     }
   }
   private buildForm() {
     this.form = this.formBuilder.group({
       email: ['', [Validators.email, Validators.required]],
       password: ['',[Validators.required, Validators.minLength(6)]],
     });
   }
}
//nombre: maria
//email: maria123@mail.com
//password: 1234567
//apellido: rua
//cedula: 5447362
//rol: director
