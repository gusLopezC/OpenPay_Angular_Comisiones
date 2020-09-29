import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OpenPayControllerService {

  constructor(
    public http: HttpClient,
    public router: Router,
    ) {
   }

   cobrarComision(Comision: any){

    
    const url = '';

    let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'multipart/form-data');
    headers = headers.set('Accept', 'application/json');
  

  return this.http.post(url, Comision, { headers }).pipe(
    map((resp: any) => {
      console.log(resp);
    }),
      catchError(error => {
        return throwError(error);
      }));
    
}

}