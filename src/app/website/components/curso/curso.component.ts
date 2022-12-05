import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../models/curso.model';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  cursos: Curso[] | any[] = [];
  showTable = false;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {

  }
  SearchCourse(){
    this.cursoService.getAll()
    .subscribe({
      next: (data) => {this.cursos = data; this.showTable=true;},
      error: () => alert('Error Al Mostrar los Datos De La Tabla')
    })
  }
}
