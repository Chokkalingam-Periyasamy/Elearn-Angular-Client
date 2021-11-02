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
        localStorage.setItem("name",stu_name);
        localStorage.setItem("role","student");
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
  post_staff(slogin:Staff):void
  {
    // if(slogin.email=="kishore@gmail.com" && slogin.password=="kishore"){
    // this.obj.Login(slogin).subscribe(data=>
    //   {
    //     console.log(slogin);
    //     localStorage.setItem("staffname","kishore");
    //     localStorage.setItem("jwtuser","bala");
    //     this.router.navigate(['/staffcourse']);
    //   })
    //  }
    {{debugger}}

    this.obj.tokenStaff(slogin).subscribe(data=>
      { 
        const usertoken=data;
        localStorage.setItem("jwtuser",usertoken);
        console.log(usertoken);
      }
    )
    this.obj.getStaffdetails(slogin).subscribe(
      data=>
      {
        this.stuflag=false;
        this.staffflag=true;
        const staff_id=data.staffid;
        const staff_name= data.name;
        localStorage.setItem("name",staff_name);
        localStorage.setItem("role","staff");
        localStorage.setItem("staff_id",staff_id.toString());
        this.router.navigate(['/staffcourse']);
        
      }
    )
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
