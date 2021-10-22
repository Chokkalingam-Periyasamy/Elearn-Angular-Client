import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Models/Login';
import { Staff } from '../Models/Staff';
import { User } from '../Models/User';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Login={
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
  staff:Staff={
    staffid: 0,
    name	: "",
    age	:"",
    gender:"",
    city:"",
    expertise:"",
    mobile:"",
    email:"",
    password:""
};
staffflag:boolean=false;
stuflag:boolean=false;

  constructor(private obj :LoginService,private router:Router) { }

  ngOnInit(): void {
    this.stuflag=true;
  }
  post_api(login:Login):void
  { 
    
    this.staffflag=false;
    this.obj.tokenCustomer(login).subscribe(
      data=>
      { 
        const usertoken=data;
        localStorage.setItem("jwtuser",usertoken);
        console.log(usertoken);
      }
    )
    this.obj.getLoginDetails(login).subscribe(
      data=>
      {
        this.stuflag=true;
        this.staffflag=false;
        const stu_id=data.userid;
        const stu_name=data.name;
        localStorage.setItem("stuname",stu_name);
        localStorage.setItem("stu_id",stu_id.toString());
        //console.log(stu_id);
        //console.log(stu_name);
        this.router.navigate(['/course']);
        
      }
    )
  
  }
  stu_button():void{
    
      this.staffflag=false;
      this.stuflag=true;
  }
  post_staff(login:Staff):void
  {
    if(login.email=="kishore@gmail.com" && login.password=="kishore"){
    this.obj.Login(login).subscribe(data=>
      {
        console.log(login);
        localStorage.setItem("staffname","kishore");
        localStorage.setItem("jwtuser","bala");
        this.router.navigate(['/staffcourse']);
      })
     }
  }
  flagstaff():void{
    this.staffflag=true;
    this.stuflag=false;
  }
  back():void{
    this.router.navigate(['/home'])
  }
  registerstu(){
    this.router.navigate(['/student'])
  }
  registerstaff(){
    this.router.navigate(['/staff'])
  }
}
