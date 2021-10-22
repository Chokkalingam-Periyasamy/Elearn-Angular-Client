import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Course } from '../Models/Course';
import { Module } from '../Models/Module';
import { Usercourse } from '../Models/Usercourse';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  course:Course[]=[];
  course1:Course[]=[];
  stumodarray:Module[]=[];
  mycourse2:Course[]=[];
  usercourse:Usercourse={
    stuid:0,
    coid:0 
  };

  getcourse:Course={
    courseid: 0,
    coursename:"",
    description:"",
    image:"",
    amount:0,
    };
    initflag:boolean=false;
    flag:boolean=false;
    mycflag:boolean=false;
    msg:string="";
    payflag:boolean=false;
    flagviewMod:boolean=false;
   
  constructor(private obj:CourseService ,private router: Router ,private jwtHelper:JwtHelperService ) { }

  ngOnInit(): void {
    this.initflag=true;
    this.flag=false;
    this.mycflag=false;
    this.payflag=false;
    this.flagviewMod=false;
    const id=Number(localStorage.getItem("stu_id"));
    const name= localStorage.getItem("stuname");
    console.log(id);
    console.log(name)
    this.obj.getCoursebyStuId(id).subscribe(data=>
      {
        
        this.course1=data;
        console.log(this.course1);
      })
  }

  get_CoursebyId(id:number):void{
    this.flag=true;
    this.initflag=false;
    this.mycflag=false;
    this.payflag=false;
    this.obj.getCourseId(id).subscribe(data=>
      {
        this.  getcourse=data;
        console.log(this.  getcourse);
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
  // getCourseStuId(id:number):void{

  //   this.obj.getCoursebyStuId(id).subscribe(data=>
  //     {
  //       this.course1=data;
  //       console.log(this.course1);
  //     })
  // }
  getMycoursebyid(id:number):void{
 
    this.obj.getMyCourse(id).subscribe(data=>
      {
        this.mycourse2=data;
        console.log(this.mycourse2);
      })
  }
  mycourse():void{
    this.mycflag=true;
    this.flag=false;
    this.initflag=false;
    this.payflag=false;
    this.flagviewMod=false;
    const id=Number(localStorage.getItem("stu_id"));
    this.getMycoursebyid(id);

  }
   
  EnrollCourse(id:number):void{
   
    this.usercourse.coid=id;
    const sid=Number(localStorage.getItem("stu_id"));
    this.usercourse.stuid=sid;
    this.obj.Enroll(this.usercourse).subscribe(data=>
      {
        this.msg="Added"
      });
      console.log(this.msg);
      alert(this.msg)
  }
  getModbyCId(id:number):void{
    this.flag=false;
    this.initflag=false;
    this.mycflag=false;
    this.payflag=false;
    this.obj.getStuModbyCouId(id).subscribe(data=>
      {
        this.flagviewMod=true;
        this.stumodarray=data;
        console.log(this.stumodarray);
        
      })
  }
  Logout():void{
    this.router.navigate(['/login']);
    localStorage.removeItem("jwtuser")
    localStorage.removeItem("stuname");
  }
  pay(id:number):void{
    this.get_CoursebyId(id);
    this.payflag=true;
    this.flag=false;
    this.initflag=false;
    this.mycflag=false;
    this.flagviewMod=false;
    this.router.navigate(['/course']);
   
  }


}

