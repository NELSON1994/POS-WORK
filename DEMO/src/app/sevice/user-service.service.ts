import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../register/register.component';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private registerUrl = 'localhost:8080/register';
  private loginUrl = 'localhost:8080/login';

  constructor(private http: HttpClient) { }

  public createUser(user) {
    return this.http.post<User>(this.registerUrl, user , httpOptions);
  }
  public loginUser(user): Observable<any> {
    return this.http.post<User>(this.loginUrl, user , httpOptions);
  }
}
