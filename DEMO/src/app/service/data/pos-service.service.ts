import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pos } from 'src/app/listpos/listpos.component';

@Injectable({
  providedIn: 'root'
})
export class PosServiceService {

  constructor(private http: HttpClient) { }

  retrieveAllPos(pos){
   return this.http.get<Pos>(`http://localhost:8080/pos/ALLPOS`);
  }

  deletePos(id){
    return this.http.get<Pos>(`http://localhost:8080/pos/delete/${id}`);
   }
   retrievePos(id){
    return this.http.get<Pos>(`http://localhost:8080/pos/retrieve/${id}`);
   }
   addpos(pos){
     return this.http.post<Pos>(`http://localhost:8080/pos/createPos`,pos);
   }
}
