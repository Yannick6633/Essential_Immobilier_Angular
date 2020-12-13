import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { CoreRoutingModule } from './core-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [NavbarComponent, FooterComponent, AuthComponent],
  imports: [
    CommonModule,
    BrowserModule,
    CoreRoutingModule,
    HttpClientModule,
  ],
  exports: [CommonModule, BrowserModule, RouterModule, NavbarComponent, FooterComponent]
})
export class CoreModule { }
