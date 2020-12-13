import { Injectable } from '@angular/core';
import {ErrorService} from './error.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Critere} from '../model/critere';
import {catchError, tap} from 'rxjs/operators';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CritereService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // ** GET Criteres
  getCriteres(): Observable<Critere[]> {
    return this.http.get<Critere[]>(env.apiUrl + 'criteres')
      .pipe(
        tap( data => data ),
        catchError(this.errorService.handleError('getCriteres', []))
      );
  }

  // ** GET Critere
  getCritereDetail(id: string): Observable<Critere> {
    return this.http.get<any>(env.apiUrl + 'criteres/' + id)
      .pipe(
        tap( data => data ),
        catchError(this.errorService.handleError('getCritere'))
      );
  }

  // ** POST Critere
  addCritere(critere): Observable<Critere> {
    return this.http.post<Critere>(env.apiUrl + 'criteres/add', critere, {responseType: 'json'})
      .pipe(
        tap((data: Critere) => console.log(data)),
        catchError(this.errorService.handleError<Critere>('addCritere'))
      );
  }

  // ** PUT Critere
  editCritere(critere, id: string): Observable<Critere> {
    return this.http.put<Critere>(env.apiUrl + 'criters/edit/' + id, critere, {responseType: 'json'})
      .pipe(
        tap((data: Critere) => console.log(data)),
        catchError(this.errorService.handleError<Critere>('editCritere'))
      );
  }

  // ** DELETE Critere
  deleteCritere(id: string): Observable<Critere> {
    const url = env.apiUrl + 'criteres/delete/' + id;
    return this.http.delete<any>(url)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('deleteCritere'))
      );
  }
}
