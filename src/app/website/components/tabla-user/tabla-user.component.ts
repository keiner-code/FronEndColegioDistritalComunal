import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-tabla-user',
  templateUrl: './tabla-user.component.html',
  styleUrls: ['./tabla-user.component.scss']
})
export class TablaUserComponent implements OnInit {

  constructor() { }

  @Input() userContent: User | any = null;
  ngOnInit(): void {

  }

}
