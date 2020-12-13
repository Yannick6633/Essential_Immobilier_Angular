import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(),
    login: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    phone: new FormControl()
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
