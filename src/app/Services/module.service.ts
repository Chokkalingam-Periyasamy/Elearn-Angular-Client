import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Module } from '../Models/Module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  constructor(private http:HttpClient) { }
  req:string="https://localhost:44320/api/Module";
  req1:string="https://localhost:44320/api/Module/GetModuleByID?Id=";
  getAllModules():Observable<Module[]>
  {
    return this.http.get<Module[]>(this.req,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
  getModulebyId(id:number):Observable<Module>{
    return this.http.get<Module>(this.req1+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

}
