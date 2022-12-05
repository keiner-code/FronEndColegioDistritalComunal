import { Component, OnInit } from '@angular/core';
import { Nota } from '../../../models/notas.model';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/user.model';
import { NotasService } from '../../../services/notas.service';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

interface modal {
  id: number,
  show: boolean
}

@Component({
  selector: 'app-notas-content',
  templateUrl: './notas-content.component.html',
  styleUrls: ['./notas-content.component.scss']
})
export class NotasContentComponent implements OnInit {
  user: User | null = null;
  nota: Nota | null = null;
  showModal = false;
  form: FormGroup;
  constructor(
    private userService: UsersService,
    private notaService: NotasService,
    private formBuilder: FormBuilder) {
      this.builFormNotas();
  }
  ngOnInit(): void {

  }
  builFormNotas(){
    this.form = this.formBuilder.group({
      nota1: [this.nota?.nota1,[Validators.required]],
      nota2: [this.nota?.nota2,[Validators.required]],
      nota3: [this.nota?.nota3,[Validators.required]],
    })
  }
  searchUser(id: number){
    this.userService.getOneCedula(id)
    .subscribe(user => {
      this.user = user;
    });
  }

editarNota(data: modal) {
    this.showModal = data.show;
     this.notaService.findOne(data.id)
    .subscribe(value => {
      this.nota = value;
      this.builFormNotas();
    })
    console.log(data);
  }
  closeModal(){
    this.showModal = false;
  }
  update(event: Event){
    event.preventDefault();
    const nota = this.form.value;
    if(this.nota){
      const id = this.nota.id;
      this.notaService.update(id, nota)
      .subscribe({
        next: () =>{
          alert('Notas Modificada');
          window.location.reload();
        },
        error: () => alert('Error Al Modificar las notas')
      })
    }
  }

}
//jaramit123@gmail.com
