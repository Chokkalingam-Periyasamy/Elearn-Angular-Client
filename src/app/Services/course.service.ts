
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Models/Course';
import { Module } from '../Models/Module';
import { Usercourse } from '../Models/Usercourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  
  req:string="https://localhost:44317/api/Course";
  
  req1:string="https://localhost:44317/api/Course/GetByCourseID?id=";

  req2:string="https://localhost:44317/api/Course/GetStudentCourse?id=";

  req3:string="https://localhost:44317/api/Course/GetCourseByUserId?myid=";

  req4:string="https://localhost:44320/api/Module/GetModuleCourseById?myid=";

  getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.req,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  getCourseId(id:number):Observable<Course>{
    return this.http.get<Course>(this.req1+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  Enroll(enroll:Usercourse):Observable<any>
  {
    return this.http.post<Usercourse>("https://localhost:44357/api/Student/UserEnroll",enroll,{
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
  getCoursebyStuId(sid:number):Observable<Course[]>{
    return this.http.get<Course[]>(this.req2+sid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  getMyCourse(sid:number):Observable<Course[]>{
    return this.http.get<Course[]>(this.req3+sid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  getStuModbyCouId(cid:number):Observable<Module[]>{
    return this.http.get<Module[]>(this.req4+cid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
}


