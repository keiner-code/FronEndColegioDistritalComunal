import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})

export class NotasComponent implements OnInit {

  @Output() idEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {

  }
  search(id: string){
      this.idEvent.emit(Number(id));
  }
}
