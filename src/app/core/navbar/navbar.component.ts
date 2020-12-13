import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ConnectorService } from '../auth/connector.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  connected: boolean;

  // tslint:disable-next-line:typedef
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private connectorService: ConnectorService, private router: Router) {
    this.connectorService.connectedObs
      .subscribe((connected) => this.connected = connected );
    this.connectorService.isLoggedIn();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.connected = false;
    this.connectorService.logout();
    this.router.navigate(['/public/dashboard']);
  }

}
