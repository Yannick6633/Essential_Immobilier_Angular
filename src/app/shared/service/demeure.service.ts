import { Injectable } from '@angular/core';
import {ErrorService} from './error.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Demeure} from '../model/demeure';
import {catchError, tap} from 'rxjs/operators';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemeureService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // ** GET Demeures
  getDemeures(): Observable<Demeure[]> {
    return this.http.get<Demeure[]>(env.apiUrl + 'demeure')
      .pipe(
        tap( data => data ),
        catchError(this.errorService.handleError('getDemeures', []))
      );
  }

  // ** GET Demeure
  getDemeureDetail(id: string): Observable<Demeure> {
    return this.http.get<any>(env.apiUrl + 'demeures/' + id)
      .pipe(
        tap( data => data ),
        catchError(this.errorService.handleError('getDemeure'))
      );
  }

  // ** POST Demeure
  addDemeure(demeure): Observable<Demeure> {
    return this.http.post<Demeure>(env.apiUrl + 'demeures/add', demeure, {responseType: 'json'})
      .pipe(
        tap((data: Demeure) => console.log(data)),
        catchError(this.errorService.handleError<Demeure>('addDemeure'))
      );
  }

  // ** PUT Demeure
  editDemeure(demeure, id: string): Observable<Demeure> {
    return this.http.put<Demeure>(env.apiUrl + 'demeures/edit/' + id, demeure, {responseType: 'json'})
      .pipe(
        tap((data: Demeure) => console.log(data)),
        catchError(this.errorService.handleError<Demeure>('editDemeure'))
      );
  }

  // ** DELETE Demeure
  deleteDemeure(id: string): Observable<Demeure> {
    const url = env.apiUrl + 'demeures/delete/' + id;
    return this.http.delete<any>(url)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('deleteDemeure'))
      );
  }
}
