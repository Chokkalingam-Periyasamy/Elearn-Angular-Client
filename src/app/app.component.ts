import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './Models/User';
import { LoginService } from './Services/login.service';
import { StudentService } from './Services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Elearn';
  consumer:User={
    userid:0,
    name:"",
    age:"",
    gender:"", 
    address:"",
    mobile:"", 
    email:"",
    password:"",
    image:"",
  };
  flag=false;
  constructor(private obj:StudentService,public l:LoginService,private router: Router ,private jwtHelper:JwtHelperService ) { }
  display(){
    if(localStorage.getItem("jwtuser"))
    {
      return localStorage.getItem("name");
    }
    else{
    return localStorage.getItem("name");
  }
  }
  get_apibyId(id:number):void{
    this.flag=true;
    this.obj.getStudentyId(id).subscribe(data=>
      {
        this.consumer=data;
        console.log(this.consumer);
      })
  }
  IsAuthendicated():boolean{
    const token:string|null=localStorage.getItem("jwtuser");
    if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  Logout():void{
    this.router.navigate(['/login']);
    localStorage.clear();
    // localStorage.removeItem("stuname");
  }
  course(){
    if(localStorage.getItem("role")=="student"){
    this.router.navigate(['/course']);
  }
  else{
    this.router.navigate(['/staffcourse']);
  }
  }

  
}
