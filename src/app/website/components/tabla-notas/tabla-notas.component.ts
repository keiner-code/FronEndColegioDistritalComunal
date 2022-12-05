import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../models/user.model';
import { TokenService } from '../../../services/token.service';
import { UsersService } from '../../../services/users.service';
import { NotasService } from '../../../services/notas.service';
import { UpdateNotadto } from '../../../models/notas.model';

interface modal {
  id: number,
  show: boolean
}

@Component({
  selector: 'app-tabla-notas',
  templateUrl: './tabla-notas.component.html',
  styleUrls: ['./tabla-notas.component.scss']
})
export class TablaNotasComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private tokenService: TokenService,
    private notasService: NotasService) { }

  userRol: string = '';
  @Input() notasContent: User | any = null;
  @Output() idNota = new EventEmitter<modal>();


  ngOnInit(): void {
    const email = this.tokenService.getEmail();
    if (email) {
      this.userService.getOneEmail(email)
    .subscribe(userRol => this.userRol = userRol.rol)
    }

  }
  notaTotal(nota1: number, nota2: number, nota3: number){
    //return nota1 + nota2 + nota3 / 3;
    return ((nota1/15) + (nota2/15) + (nota3/20)) * 10;
  }
  enviarIdNotas(id: number){
    this.idNota.emit({
      id: id,
      show: true
    });

    /* const nota: UpdateNotadto = {
      nota1: 3,
      nota2: 0,
      nota3: 4
    }
    this.notasService.update(id,nota)
    .subscribe(data => console.log(data))*/
  }
}
