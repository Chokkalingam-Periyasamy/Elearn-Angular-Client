import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from '../Models/Staff';
import { StaffService } from '../Services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  allstaff:Staff[]=[];
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
msg:string="";
flag:boolean=false;
flagpost:boolean=false;
flagupdate:boolean=false;
  constructor(private obj:StaffService ,private router: Router) { }

  ngOnInit(): void {
    this.flagpost=true;
  }
  getallstaff():void
  {
    this.obj.getStaff().subscribe(data=>{
      this.allstaff=data;
      console.log(this.allstaff);
    });
  }
  getstaffbyId(id:number):void{
    this.flag=true;
    this.obj.getStaffId(id).subscribe(data=>
      {
        this.teacher=data;
        console.log(this.teacher);
      })
  }
  post_staff(stu:Staff):void{
    this.obj.postStaff(stu).subscribe(data=>
      {
        this.msg="Added";
        this.router.navigate(['/login']);
      });
      console.log(this.msg);
  }
  postbutton():void{
    this.flagpost=true;
  }
  delete_api(id:number):void
  {
    this.obj.deleteStaff(id).subscribe(data=>
      {
        this.msg="Deleted";
        this.router.navigate(['/course']);
      });
    alert(this.msg);
  }
  put_api(stu:Staff,id:number):void
  {
    this.obj.putStaff(stu,id).subscribe(
      data=>{
        this.msg="Updated"
      }
    );
    console.log(this.msg);
  }
  updatebutton(id:number):void{
    this.flagupdate=true;
  }
  register(){
    this.router.navigate(['/login'])
  }
}
