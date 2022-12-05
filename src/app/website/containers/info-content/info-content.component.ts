import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-info-content',
  templateUrl: './info-content.component.html',
  styleUrls: ['./info-content.component.scss']
})
export class InfoContentComponent implements OnInit {

  dataInfo = [
    {
      img: 'https://www.colegioespiritusanto.edu.co/images/noticias/semana_ludica_2019/semana.jpg',
      title: 'semana lúdica'
    },
    {
      img: 'https://www.colegioespiritusanto.edu.co/images/slider/2Admisiones_CESMA_2022.jpg',
      title: 'Admisiones 2022'
    },
    {
      img: 'https://www.colegioespiritusanto.edu.co/images/noticias/Visita_AG.jpg',
      title: 'Una Visita Muy Especial'
    },
    {
      img: 'https://www.online-image-editor.com/styles/2019/images/power_girl.png',
      title: 'Semana Joven'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
