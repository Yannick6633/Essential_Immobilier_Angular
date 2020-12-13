
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemeureListComponent } from './demeure/demeure-list/demeure-list.component';
import { DemeureDetailComponent } from './demeure/demeure-detail/demeure-detail.component';
import { CritereListComponent } from './critere/critere-list/critere-list.component';
import { CritereDetailComponent } from './critere/critere-detail/critere-detail.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import {UserListComponent} from './user/user-list/user-list.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    DemeureListComponent,
    DemeureDetailComponent,
    CritereListComponent,
    CritereDetailComponent,
    UserDetailComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent,
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
  ]
})
export class PublicModule { }
