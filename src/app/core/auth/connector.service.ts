import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from '../../shared/service/error.service';
import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  // tslint:disable-next-line:variable-name
  private _connected: Subject<boolean> = new Subject<boolean>();
  public connectedObs = this._connected.asObservable();


  constructor(private http: HttpClient, private errorService: ErrorService, private router: Router) {
    this.isLoggedIn();
  }

  public login(params): Observable<any> {
    return this.http.post(
      env.apiUrl + 'users/login', params, {responseType: 'json'}
    )
      .pipe(
        tap(data => {
          const result: any = data;
          if (result.token !== null && result.token !== undefined) {
            this._connected.next(true);
          }
        }),
        catchError(this.errorService.handleError('getUsers', []))
      );
  }

  public postRequest(url, params): Observable<any> {
    return this.http.post(
      url, {
        params: params
      }
    );
  }

  // tslint:disable-next-line:typedef
  public isLoggedIn() {
    if (localStorage.getItem('auth')) {
      this._connected.next(true);
      return true;
    }
    this._connected.next(false);
    return false;
  }

  // tslint:disable-next-line:typedef
  public logout() {
    localStorage.removeItem('auth');
    this._connected.next(false);
    this.router.navigate(['/public/dashboard']);
  }
}

interface Result {
  message: string;
  token: string;
}
