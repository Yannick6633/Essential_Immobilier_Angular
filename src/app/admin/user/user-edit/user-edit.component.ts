import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../shared/service/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(),
    login: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    phone: new FormControl(),
  });

  private id: any;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.route.params
      .subscribe(params => this.id = params.id );
  }

  ngOnInit(): void {
    this.getUserDetail(this.id);
  }

  // tslint:disable-next-line:typedef
  private getUserDetail(id: string) {
    this.userService.getUserDetail(id)
      .subscribe( data => {
        this.userForm.patchValue({
          name: data.name,
          login: data.login,
          age: data.age,
          email: data.email,
          password: data.password,
          phone: data.phone
        });
      });
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
