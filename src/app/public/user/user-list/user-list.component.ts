import { Component, OnInit } from '@angular/core';
import {User} from '../../../shared/model/user';
import {UserService} from '../../../shared/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // tslint:disable-next-line:typedef
  getUsers() {
    this.userService.getUsers()
      .subscribe(data => this.users = data);
  }

}
