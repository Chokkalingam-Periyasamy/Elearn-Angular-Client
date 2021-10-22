import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from '../Models/Module';
import { ModuleService } from '../Services/module.service';


@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  module:Module[]=[];
  module1:Module[]=[];
  modulebyid:Module[]=[];
   user:Module={
    moduleid: 0,
    courseid: 0,
    modulename: "",
     video: ""
   };
   flag:boolean=false;
  constructor(private router: Router,private obj: ModuleService) { }
  ngOnInit(): void {
  }
  flag_get:boolean=false;
  flag_getid:boolean=false;
  flag_post:boolean=false;
  flag_put:boolean=false;
  flag_delete:boolean=false;
  flag_register:boolean=false;


  

  get_api():void{
    
    this.obj.getAllModules().subscribe((data: any)=>
      {
        this.module=data;
        console.log(this.module);
      }
    );
  }
  getid_api(moduleid:number):void
  {
    this.flag=true;
    this.obj.getModulebyId(moduleid).subscribe(data=>
      {
        
        this.user=data;
        console.log(this.module);
      })
  }


}
