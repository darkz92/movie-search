import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, publishReplay, refCount} from 'rxjs/operators';

@Injectable()
export class BaseService {
  constructor(public http: HttpClient) {
  }

  public get<T>(url: string, httpParams?: HttpParams, httpHeaders?: HttpHeaders, cache: boolean = false): Observable<HttpResponse<T>> {
    if (cache) {
      return this.http.get<T>(url, {
        observe: 'response',
        headers: httpHeaders,
        params: httpParams
      }).pipe(
        catchError(this.handleError),
        publishReplay(1),
        refCount()
      );
    } else {
      return this.http.get<T>(url, {
        observe: 'response',
        headers: httpHeaders,
        params: httpParams
      }).pipe(
        catchError(this.handleError)
      );
    }
  }

  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(error);
  };
}
