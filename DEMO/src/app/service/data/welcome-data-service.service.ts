import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataServiceService {

  constructor(private http: HttpClient) { }

  executeWelcomeService(): Observable<any>{
    return this.http.get(' http://localhost:8080/hello ');
    //console.log("THIS IS ALL WE NEED");
  }
}
