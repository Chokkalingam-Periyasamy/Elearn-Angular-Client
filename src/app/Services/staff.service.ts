import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Staff } from '../Models/Staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private http:HttpClient) { }
  req:string="https://localhost:44319/api/Staff";
  req1:string="https://localhost:44319/api/Staff/GetStaffByID?Id=";

  getStaff():Observable<Staff[]>{
    return this.http.get<Staff[]>(this.req,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  getStaffId(id:number):Observable<Staff>{
    return this.http.get<Staff>(this.req1+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  postStaff(stud:Staff):Observable<any>
  {
    return this.http.post<Staff>(this.req,stud,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }
  deleteStaff(id:number):Observable<any>
  {
   return this.http.delete<any>(this.req+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  putStaff(student:Staff,id:number):Observable<any>
  {
    return this.http.put<Staff>(this.req+"?id="+id,student,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        }
      )
    })
  }
 
}
