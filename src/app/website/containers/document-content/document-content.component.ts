import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-document-content',
  templateUrl: './document-content.component.html',
  styleUrls: ['./document-content.component.scss']
})
export class DocumentContentComponent implements OnInit {

  user: User | null = null;

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {

  }
  searchUser(id: number){
    this.userService.getOneCedula(id)
    .subscribe(user => {
      this.user = user;
    });

  }
}
