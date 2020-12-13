import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CritereListComponent } from './critere/critere-list/critere-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { DemeureListComponent } from './demeure/demeure-list/demeure-list.component';
import {RegisterComponent} from './register/register.component';
import {DemeureDetailComponent} from './demeure/demeure-detail/demeure-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'demeure', component: DemeureListComponent },
  { path: 'critere', component: CritereListComponent },
  { path: 'user', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'demeure-detail', component: DemeureDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
