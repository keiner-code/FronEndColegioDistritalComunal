import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CursoService } from '../../../services/curso.service';
import { MateriaService } from '../../../services/materia.service';
import { HorarioService } from '../../../services/horario.service';
import { NotasService } from '../../../services/notas.service';

import { CreateCursodto } from '../../../models/curso.model';
import { CreateMateriadto } from '../../../models/materia.model';

@Component({
  selector: 'app-colegio-crud',
  templateUrl: './colegio-crud.component.html',
  styleUrls: ['./colegio-crud.component.scss']
})
export class ColegioCrudComponent implements OnInit {
  formHorario: FormGroup;
  formMateria: FormGroup;
  @ViewChild('name') inputName: any;
  constructor(
    private formBuilder: FormBuilder,
    private cursoService: CursoService,
    private materiaService: MateriaService,
    private horarioService: HorarioService,
    private notaService: NotasService
    )
    {
      this.buildFormMateria();
      this.buildFormHorario();
    }

  ngOnInit(): void {
  }
  createCurso(name: CreateCursodto){
    this.cursoService.create(name).subscribe({
      next: () => alert('Curso Creado'),
      error: () => alert('Ha Ocurrido Un error')
    });
    this.inputName.nativeElement.value = ' ';
  }

//por cada alumno tengo que crear una nota
  createMateria(event: Event){
    event.preventDefault();

    if(this.formMateria.valid){
      const formValue = this.formMateria.value;

      const usuariosIds = formValue.usuarios.split(',');
      const usuario: number[] | any[] = [];
      usuariosIds.map((formValue: string) =>{
        usuario.push(Number(formValue));
          this.notaService.create({
            nota1: 0,
            nota2: 0,
            nota3: 0,
            userId: Number(formValue)
          }).subscribe()
      });
      usuario.push(formValue.profesorId);


      delete formValue.profesorId;
      const value: CreateMateriadto = {
        ...formValue,
        userIds: usuario
      }
      this.materiaService.create(value)
      .subscribe({
        next: () => {
          alert('Materia Creada');
          this.formMateria.reset();
        },
        error: () => alert('error al Crear La Materia')
      })
    }
  }
  private buildFormMateria(){
    this.formMateria = this.formBuilder.group({
      materia: ['', [Validators.required]],
      descripcion: ['',[Validators.required]],
      usuarios: ['', [Validators.required]],
      profesorId: [[Validators.required]]
    })
  }

  private buildFormHorario(){
    this.formHorario = this.formBuilder.group({
      dia: ['', [Validators.required]],
      horaInicio: ['',[Validators.required]],
      horaFin: ['', [Validators.required]],
      materiaId: [[Validators.required]],
      cursoId: [[Validators.required]],
    });
  }

  createHorario(event: Event) {
    event.preventDefault();
    const valueForm = this.formHorario.value;
    this.horarioService.create(valueForm)
    .subscribe({
      next: () => {
        alert('Horario Creada');
        this.formHorario.reset();
      },
      error: () => alert('Error Al Crear El Horario')
    });

  }

}
