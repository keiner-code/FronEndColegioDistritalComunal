import { Component, OnInit } from '@angular/core';

import { MateriaService } from '../../../services/materia.service';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/user.model';
import { Materia } from '../../../models/materia.model';
import { Horario } from '../../../models/horario.model';
import html2canvas from 'html2canvas';
declare var jsPDF: any;

@Component({
  selector: 'app-tabla-formatos',
  templateUrl: './tabla-formatos.component.html',
  styleUrls: ['./tabla-formatos.component.scss']
})
export class TablaFormatosComponent implements OnInit {
    tableMateria = false;
    listaEstudiantes = false;
    users: User[] | [] = [];
    materia: Materia[] | any[] = [];
    profesor: User | any;
    horario: Horario | any;
  constructor(
    private materiaService: MateriaService,
    private userService: UsersService
    ) { }

  ngOnInit(): void {
  }
  SearchTeacher(cedula: string){
     this.userService.getOneCedula(Number(cedula))
     .subscribe(data => {
      this.materia = data.materia;
      this.tableMateria = !this.tableMateria;
    });
  }
  generateList(id: string){
        this.materiaService.getOne(Number(id))
        .subscribe(value => {
          const data = value.user.filter((item) => item.rol != 'profesor');
          this.profesor = value.user.filter((item) => item.rol == 'profesor');
          this.users = data;
          this.listaEstudiantes = !this.listaEstudiantes;
          this.horario = value.horario;
      });
  }

  GeneratePdf(){
     const DATA:  any = document.querySelector('.list_content');
     const doc = new jsPDF('p', 'pt', 'a4');
     const options = {
       background: 'white',
       scale: 3
     };
     html2canvas(DATA, options).then((canvas) => {

       const img = canvas.toDataURL('image/PNG');

       // Add image Canvas to PDF
       const bufferX = 15;
       const bufferY = 15;
       const imgProps = (doc as any).getImageProperties(img);
       const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
       doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
       return doc;
     }).then((docResult) => {
       docResult.save(`${new Date().toISOString()}_horario.pdf`);
     });
   }

}
//
