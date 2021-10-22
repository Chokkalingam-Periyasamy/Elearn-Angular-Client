import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../Models/Login';
import { Staff } from '../Models/Staff';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  req:string="https://localhost:44377/api/Login";
  req1:string="https://localhost:44319/api/Staff/StaffLogin";
  
    constructor(private http:HttpClient,private router: Router) { }
    tokenCustomer(cust:User):Observable<any>
    {
      return this.http.post(this.req,cust,
      {
        headers: new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*',    
          'Accept': 'text/html, application/xhtml+xml, /'
    }),responseType:'text'}
      )
    }
    getLoginDetails(cust:User):Observable<User>
    {
      return this.http.post<User>("https://localhost:44377/api/Login/UserDetail",cust,
      {
        headers:new HttpHeaders(
          {
            'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'*'
          })
      })
    }


    Login(login:Staff):Observable<any>
    {
      return this.http.post(this.req1,login,
        {
          headers: new HttpHeaders({
            'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'*',    
            'Accept': 'text/html, application/xhtml+xml, */*'
      }),responseType:'text'}
      )}
      loggedIn(){
        return !!localStorage.getItem('jwtuser');
      }
      loggedUser(){
        localStorage.removeItem('jwtuser');
        this.router.navigate(['/login'])
      }
}
