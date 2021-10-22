import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Course } from '../Models/Course';
import { Module } from '../Models/Module';
import { StaffcourseService } from '../Services/staffcourse.service';

@Component({
  selector: 'app-staffcourse',
  templateUrl: './staffcourse.component.html',
  styleUrls: ['./staffcourse.component.css']
})
export class StaffcourseComponent implements OnInit {
  course:Course[]=[];
  modarray:Module[]=[];

  getmodule:Module={
  
      moduleid: 0,
      courseid: 0,
      modulename: "",
       video: ""
  };

  getcourse:Course={
    courseid: 0,
    coursename:"",
    description:"",
    image:"",
    amount:null,
    };
    coursedetail:Course={
      courseid: 0,
      coursename:"",
      description:"",
      image:"",
      amount:null,
      };
    msg:string="";
    flag:boolean=false;
    flagpost:boolean=false;
    flagupdate:boolean=false;
    flagModulepost:boolean=false;
    flagviewMod:boolean=false;
  constructor(private obj:StaffcourseService ,private router: Router ,private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
   this.flag=true;
   this.flagpost=false;
   this.flagupdate=false;
   this.flagModulepost=false;
   this.flagviewMod=false;

   this.obj.getAllCourses().subscribe(data=>{
      this.course=data;
  
     console.log(this.course);
    });
   
  }
  // get_courses():void
  // {
  //   this.flag=true;
  //   this.obj.getAllCourses().subscribe(data=>{
  //     this.course=data;
  
  //     console.log(this.course);
  //  
  // }
 
  post_api(stu:Course):void{

    this.obj.postCourse(stu).subscribe(data=>
      {
        this.msg="Added";
        this.ngOnInit();

      });
    
      console.log(this.msg);
    
  }

  postbutton():void{
    this.flagpost=true;
    this.flag=false;
    this.flagupdate=false;
    this.flagviewMod=false;
  }

  put_api(stu:Course,id:number):void
  {
    
  
    this.obj.putCourse(stu,id).subscribe(
      data=>{
        this.msg="Updated";
        console.log(stu);
        console.log(id);
        this.ngOnInit();
        alert("Course Updated Successfully");
        
      }
    );
   
  }
  updatebutton(stu:Course,id:number):void{
    this.flagupdate=true;
    this.flag=false;
    this.flagpost=false;
    this.flagviewMod=false;
    console.log(stu);
    console.log(id);
    const courseid=id;
    this.getmodule.courseid=courseid;
    const a =localStorage.setItem("coid",id.toString());
    this.obj.getbyCoId(courseid).subscribe(data=>
      {
        this.getcourse=data;
      });

    }
  delete_api(id:number):void
  {
    this.obj.deleteCourse(id).subscribe(data=>
      {
        this.msg="Deleted";
      
        this.ngOnInit();
      });
      alert("Deleted")
      console.log(this.msg);
      
    
  }
  IsAuthendicated():boolean{
    const token:string|null=localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  AddModule(mod:Module,id:number):void{
    
    this.obj.postModule(mod).subscribe(data=>
      {
        this.msg="Added"
        
      });
      this.ngOnInit();
      console.log(this.msg);
  }
  postModuleBtn(id:number):void{
    this.flagModulepost=true;
    this.flagviewMod=false;
    this.flag=false;
    const courseid=id;
    this.getmodule.courseid=courseid;
    console.log(courseid);

  }
  getModbyCId(id:number):void{
    this.flagviewMod=true;
    this.flagupdate=false;
    this.flag=false;
    this.flagpost=false;
   
   
    this.obj. getModbyCouId(id).subscribe(data=>
      {
        
        this.modarray=data;
        console.log(this.modarray);
      })
  }
  Logout():void{
    this.router.navigate(['/login']);
  }

  

}
