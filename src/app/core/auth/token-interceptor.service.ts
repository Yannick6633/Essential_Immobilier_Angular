import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  // tslint:disable-next-line:typedef
  intercept(req, next) {

    if (this.getToken()) {
      const tokenizedReq = req.clone({
        setHeaders : {
          Authorization : 'Bearer ' + this.getToken()
        }
      });

      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }

  }

  // tslint:disable-next-line:typedef
  private getToken() {
    if (!!localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return false;
    }
  }
}
