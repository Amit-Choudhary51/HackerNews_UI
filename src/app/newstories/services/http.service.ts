import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators'
import { API } from '../models/apiconstants';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
 
 constructor(private httpClient: HttpClient) { }  
 
// get api call.
 httpGet(url:string):Observable<any>{
   return this.httpClient.get(`${API.BaseURL}${url}`,
   {
    observe:'response'
  })
   .pipe(retry(1), catchError(this.handleError));
 } 

 // handle server side error
 handleError(error: any) {
    
    let errorMessage = `Error Code: ${error.error.StatusCode}\nMessage: ${error.error.Message}`;
    console.log(errorMessage)
    window.alert(errorMessage);
  return throwError(() => {
    return errorMessage;
  });
}

}
