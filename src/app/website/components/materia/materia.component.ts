import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../../services/materia.service';
import { Materia } from '../../../models/materia.model';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss']
})
export class MateriaComponent implements OnInit {
  materias: Materia[] | any[] = [];
  tableMateria = false;

  constructor(private materiaService: MateriaService) { }

  ngOnInit(): void {
  }
  SearchCourse(){
    this.materiaService.getAll()
    .subscribe({
      next: (data) => {this.materias = data; this.tableMateria = true},
      error: () => alert('error Al Mostrar Las Materias')
    })
  }

}
