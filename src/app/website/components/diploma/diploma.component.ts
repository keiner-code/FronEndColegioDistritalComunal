import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Nota } from '../../../models/notas.model';
import { UsersService } from '../../../services/users.service';
import html2canvas from 'html2canvas';
declare var jsPDF: any;

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss']
})
export class DiplomaComponent implements OnInit {
  user: User | any = null;
  showBoletin = false;

  constructor(private userservice: UsersService) { }

  ngOnInit(): void {
  }

  SearchStudent(cedula: string){
    this.userservice.getOneCedula(Number(cedula))
      .subscribe({
        next: (data) => {this.user = data; this.showBoletin = true},
        error: (error) => alert(`${error} al Buscar El Estudiante`),
      })
    }

    generateBoletin(){
     const DATA:  any = document.querySelector('.boletin_container');
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
       docResult.save(`diploma ${this.user.nombre} ${this.user.apellido}.pdf`);
     });
    }
    notasTotal(notas: Nota){
      return ((notas.nota1/15) + (notas.nota2/15) + (notas.nota3/20)) * 10;
    }
}


/*Funcionalidades.
•	El aplicativo podrá crear, actualizar o desactivar un estudiante matriculado.
•	El aplicativo podrá crear, actualizar, o desactivar un profesor.
•	El aplicativo permitirá a los profesores subir las notas del estudiante.
•	El aplicativo permitirá crear el boletín del estudiante. */
