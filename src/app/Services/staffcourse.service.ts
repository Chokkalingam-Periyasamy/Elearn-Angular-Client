import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Module } from '../Models/Module';
import { Observable } from 'rxjs';
import { Course } from '../Models/Course';

@Injectable({
  providedIn: 'root'
})
export class StaffcourseService {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:44317/api/Course";
  
  req1:string="https://localhost:44317/api/Course/GetByCourseID?id=";
  req2:string="https://localhost:44320/api/Module";
  req3:string="https://localhost:44320/api/Module/GetModuleCourseById?myid=";
  


  getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.req,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  

  postCourse(addcourse:Course):Observable<any>
  {
    return this.http.post<Course>(this.req,addcourse,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }
  putCourse(upcourse:Course,id:number):Observable<any>
  {
    return this.http.put<Course>(this.req+"?id="+id,upcourse,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        }
      )
    })
  }
  deleteCourse(id:number):Observable<any>
  {
   return this.http.delete<any>(this.req+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  postModule(mod:Module):Observable<any>
  {
    return this.http.post<Module>(this.req2,mod,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }
  getModbyCouId(cid:number):Observable<Module[]>{
    return this.http.get<Module[]>(this.req3+cid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  getbyCoId(cid:number):Observable<Course>{
    return this.http.get<Course>(this.req1+cid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

}
