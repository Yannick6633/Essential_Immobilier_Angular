import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CritereAddComponent } from './critere/critere-add/critere-add.component';
import { CritereEditComponent } from './critere/critere-edit/critere-edit.component';
import { CritereListComponent } from './critere/critere-list/critere-list.component';
import { CritereDeleteComponent } from './critere/critere-delete/critere-delete.component';
import { DemeureAddComponent } from './demeure/demeure-add/demeure-add.component';
import { DemeureEditComponent } from './demeure/demeure-edit/demeure-edit.component';
import { DemeureListComponent } from './demeure/demeure-list/demeure-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    CritereAddComponent,
    CritereEditComponent,
    CritereListComponent,
    CritereDeleteComponent,
    DemeureAddComponent,
    DemeureEditComponent,
    DemeureListComponent,
    UserAddComponent,
    UserEditComponent,
    UserListComponent,
    UserDeleteComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
