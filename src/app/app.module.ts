import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtModule } from '@auth0/angular-jwt';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { StaffComponent } from './staff/staff.component';
import { StaffcourseComponent } from './staffcourse/staffcourse.component';
import { ModuleComponent } from './module/module.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { Observable } from 'rxjs';
import { User } from './Models/User';
import { PrivacyComponent } from './privacy/privacy.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';

export function tokenGet() {
  return localStorage.getItem("jwt");
}
export function tokenStaffGet() {
  return localStorage.getItem("jwtstaff");
}
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoginComponent,
    CourseComponent,
    StaffComponent,
    StaffcourseComponent,
    ModuleComponent,
    HomeComponent,
    StudentdetailComponent,
    PrivacyComponent,
    SuccessComponent,
    FailureComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,

    HttpClientModule,JwtModule.forRoot({
      config: {
        tokenGetter: tokenGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenStaffGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
    }), BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private http:HttpClient) { }
  req1:string="https://localhost:44357/api/Student/GetByID?id=";
  getStudentyId(id:number):Observable<User>{
    return this.http.get<User>(this.req1+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }
 }
