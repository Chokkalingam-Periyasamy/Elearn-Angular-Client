import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../Models/User';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student:User[]=[];
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
  msg:string="";
  flag:boolean=false;
  flagpost:boolean=false;
  flagupdate:boolean=false;
  constructor(private obj:StudentService ,private router: Router  ) { }

  ngOnInit(): void {
  }
  get_api():void
  {
    this.obj.getAllStudents().subscribe(data=>{
      this.student=data;
  
      console.log(this.student);
    });
  }
  get_apibyId(id:number):void{
    this.flag=true;
    
    this.obj.getStudentyId(id).subscribe(data=>
      {
        this.consumer=data;
        console.log(this.consumer);
      })
  }
   post_api(stu:User):void{
    this.obj.postStudent(stu).subscribe(data=>
      {
        this.msg="Added"
        this.router.navigate(['/login']);
        console.log(this.msg);
        
      });
     
      
  }
  delete_api(id:number):void
  {
    this.obj.deleteStudent(id).subscribe(data=>
      {
        this.msg="Deleted";
        this.router.navigate(['/']);
      });
    alert(this.msg);
  }

  put_api(stu:User,id:number):void
  {
    this.obj.putStudent(stu,id).subscribe(
      data=>{
        this.msg="Updated"
      }
    );
    console.log(this.msg);
  }
  

  postbutton():void{
    this.flagpost=true;
  }
  updatebutton(id:number):void{
    this.flagupdate=true;
  }
  back():void{
    this.router.navigate(['/login'])
  }
  register():void{
    this.router.navigate(['/login'])
  }
  

}
