import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleComponent } from './module/module.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { StaffComponent } from './staff/staff.component';
import { StaffcourseComponent } from './staffcourse/staffcourse.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'student',component:StudentComponent},
  {path:'course',component:CourseComponent},
  {path:'staff' ,component:StaffComponent},
  {path:'staffcourse' ,component:StaffcourseComponent},
  {path:'module' ,component:ModuleComponent},
  {path:'home' ,component:HomeComponent},
  {path:'studetail',component:StudentdetailComponent},
  {path:'privacy',component:PrivacyComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
