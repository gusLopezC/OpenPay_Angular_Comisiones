import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

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

    let url  = "";
    console.log(Comision);
    
    if(Comision.environment == "produccion"){
       url = 'https://api.openpay.mx/v1/'+Comision.MERCHANT_ID+'/fees';

    }else{
       url = 'https://sandbox-api.openpay.mx/v1/'+Comision.MERCHANT_ID+'/fees';
    }
   

    var Peticion = {
      "customer_id": Comision.customer_id,
      "amount" : Comision.monto,
      "description" : "Cobro de comision para " + Comision.customer_id,
    };

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Authorization', 'Basic ' + Comision.SECRECT_API_KEY); 
  

  return this.http.post(url, Peticion, { headers }).pipe(
    map((resp: any) => {
      return resp;
    }),
      catchError(error => {
        Swal.fire('Oops...', 'Hubo un error revisa los logs para mayor información', 'error');
        return throwError(error);
      }));
    
}

}