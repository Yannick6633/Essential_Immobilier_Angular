import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../core/auth/authentication.service';
import { ConnectorService } from '../../core/auth/connector.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });


  constructor(private connectorService: ConnectorService, private authenticationService: AuthenticationService, private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.connectorService.login(this.loginForm.value)
      .subscribe(data => {
        if (data.token != null || data.token !== undefined){
          localStorage.setItem('auth', data.token);
          this.router.navigate(['/admin/demeure']);
        }
        else {
          this.router.navigate(['/public/dashboard']);
        }
      });
  }
}
