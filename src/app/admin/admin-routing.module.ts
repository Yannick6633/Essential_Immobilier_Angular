import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CritereListComponent as AdminCritereList } from './critere/critere-list/critere-list.component';
import { DemeureListComponent as AdminDemeureList } from './demeure/demeure-list/demeure-list.component';
import { UserListComponent as AdminUserList } from './user/user-list/user-list.component';
import { CritereAddComponent } from './critere/critere-add/critere-add.component';
import { DemeureAddComponent } from './demeure/demeure-add/demeure-add.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { DemeureEditComponent } from './demeure/demeure-edit/demeure-edit.component';
import { CritereEditComponent } from './critere/critere-edit/critere-edit.component';


const adminRoutes: Routes = [
  { path: 'critere', component: AdminCritereList },
  { path: 'critere/add', component: CritereAddComponent },
  { path: 'critere/edit/:id', component: CritereEditComponent },
  { path: 'demeure', component: AdminDemeureList },
  { path: 'demeure/add', component: DemeureAddComponent },
  { path: 'demeure/edit/:id', component: DemeureEditComponent },
  { path: 'user', component: AdminUserList },
  { path: 'user/add', component: UserAddComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
