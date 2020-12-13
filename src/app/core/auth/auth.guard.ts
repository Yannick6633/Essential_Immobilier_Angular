import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.checkToken()){
      this.router.navigate(['/public/dashboard']);
      return false;
    }
    else {
      return true;
    }
  }

  // tslint:disable-next-line:typedef
  checkToken() {
    return !!localStorage.getItem('token');
  }
}
