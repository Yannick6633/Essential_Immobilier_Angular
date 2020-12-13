import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {TokenInterceptorService} from './auth/token-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'public',
    loadChildren: () => import('../public/public.module').then(m => m.PublicModule)
  },
  {
    path: '',
    redirectTo: '/public/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    TokenInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class CoreRoutingModule { }
