import { tap, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { ErrorService } from './error.service';
import {Demeure} from '../model/demeure';
import {environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // ** GET Users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(env.apiUrl + 'users')
      .pipe(
        tap( data => data ),
        catchError(this.errorService.handleError('getUsers', []))
      );
  }

  // ** POST User
  addUser(user): Observable<User> {
    return this.http.post<User>(env.apiUrl + 'users/add', user, {responseType: 'json'})
      .pipe(
        tap((data: User) => console.log(data)),
        catchError(this.errorService.handleError<User>('addUser'))
      );
  }

  getUserDetail(id: string): Observable<User> {
    return this.http.get<any>(env.apiUrl + 'users/' + id)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('getUser'))
      );
  }

  editUser(user, id: string): Observable<User> {
    return this.http.put<User>(env.apiUrl + 'users/edit/' + id, user, {responseType: 'json'})
      .pipe(
        tap((data: User) => console.log(data)),
        catchError(this.errorService.handleError<User>('deleteUser'))
      );
  }
}
