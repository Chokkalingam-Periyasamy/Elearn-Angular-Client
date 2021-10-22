import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
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
  flag=false;
  constructor(private obj:StudentService ) { }

  ngOnInit(): void {
     
    const sid=localStorage.getItem('stu_id');
    this.obj.getStudentyId(Number(sid)).subscribe(data=>
      {
        console.log(sid);
        this.consumer=data;
        console.log(this.consumer);
      })
   
  }


}
