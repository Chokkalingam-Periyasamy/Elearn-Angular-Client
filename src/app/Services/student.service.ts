import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  
  req:string="https://localhost:44357/api/Student";
  req1:string="https://localhost:44357/api/Student/GetByID?id=";

  getAllStudents():Observable<User[]>{
    return this.http.get<User[]>(this.req,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  getStudentyId(id:number):Observable<User>{
    return this.http.get<User>(this.req1+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  postStudent(stud:User):Observable<any>
  {
    return this.http.post<User>(this.req,stud,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }
  deleteStudent(id:number):Observable<any>
  {
   return this.http.delete<any>(this.req+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  putStudent(student:User,id:number):Observable<any>
  {
    return this.http.put<User>(this.req+"?id="+id,student,{
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
