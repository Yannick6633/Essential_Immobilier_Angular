import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../shared/service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(),
    login: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    phone: new FormControl(),
  });

  private id: string;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.userForm.get('name').value);
    formData.append('login', this.userForm.get('login').value);
    formData.append('age', this.userForm.get('age').value);
    formData.append('email', this.userForm.get('email').value);
    formData.append('password', this.userForm.get('password').value);
    formData.append('phone', this.userForm.get('phone').value);

    this.userService.editUser(formData, this.id)
      .subscribe(actor => {
        this.router.navigate(['/admin/user']);
      });
  }

}
