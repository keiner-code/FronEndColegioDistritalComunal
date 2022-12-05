import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import {Router} from '@angular/router';
import { NotasService } from '../../../services/notas.service';
import { CreateNotadto } from '../../../models/notas.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private notasService: NotasService
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      cedula: ['',[Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      rol: ['',[Validators.required]],
    });
  }
  register(event: Event){
    event.preventDefault();
    const value = this.form.value;
    if (this.form.valid) {
        this.userService.create(value)
        .subscribe({
          next: () => {
            alert('usuario Creado');
            //this.router.navigate(['/control notas']);
            this.form.reset();
          }
        });
    }
  }
  goBack() {
    this.router.navigate(['/control notas']);
    }
}
