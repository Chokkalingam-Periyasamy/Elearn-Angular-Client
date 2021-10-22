import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class StudentdetailService {
  constructor(private http:HttpClient) { }
  req1:string="https://localhost:44357/api/Student/GetByID?id=";
  getStudentyId(id:number):Observable<User>{
    return this.http.get<User>(this.req1+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}
