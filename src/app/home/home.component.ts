import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private jwtHelper:JwtHelperService,private router: Router ) { }

  ngOnInit(): void {
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
  Login():void{
    this.router.navigate(['/login'])
  }
  Register():void{
    this.router.navigate(['/student'])
  }
}
