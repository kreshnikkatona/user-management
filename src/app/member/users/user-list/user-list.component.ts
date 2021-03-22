import { Component, Input, OnInit } from '@angular/core';
import { User, UserService } from '../user.service'; 

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input()
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAll().subscribe(users => this.users = users);
  }
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'action'];
}



