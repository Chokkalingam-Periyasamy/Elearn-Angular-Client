import { Component, OnInit } from '@angular/core';
import { Staff } from '../Models/Staff';
import { User } from '../Models/User';
import { StaffService } from '../Services/staff.service';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
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
  teacher:Staff={
    staffid: 0,
    name	:"",
    age	:"",
    gender:"",
    city:"",
    expertise:"",
    mobile:"",
    email:"",
    password:""
};
  isstudent=false;
  isstaff=false;

  constructor(private obj:StudentService,private obj1:StaffService ) { }

  ngOnInit(): void {

     if(localStorage.getItem("role")=="student")
     {
      
    const sid=localStorage.getItem('stu_id');
    this.obj.getStudentyId(Number(sid)).subscribe(data=>
      {
        console.log(sid);
        this.consumer=data;
        console.log(this.consumer);
      })
    }
   else{
    {
      const sid=localStorage.getItem('staff_id');
      this.obj1.getStaffId(Number(sid)).subscribe(data=>
        {
          console.log(sid);
          this.teacher=data;
          console.log(this.teacher);
        })
      }
     
   }
   {{debugger}}
   if(localStorage.getItem("role")=="staff"){

     this.isstaff=true;
     this.isstudent=false;
   }
   else{
     this.isstudent=true;
     this.isstaff=false;
   }
  }


}
