import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './Student/student-registration.component';
import { InstituteRegistrationComponent } from './Institute/institute-registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StudentService } from './Student/student-service';
import { InstituteService } from './Institute/institute-service';

import { ScholarshipApplicationService } from './Scholarship-Application-Form/scholarship-application.service';
import { ScholarshipApplicationComponent } from './Scholarship-Application-Form/scholarship-application.component';

import { HomePageComponent } from './Homepage/homepage.component';


import { StudentLoginComponent } from './Student/student-login.component';
import { HeaderComponent } from './Homepage/header.component';
import { FooterComponent } from './Homepage/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginService } from './Student/student-login-service';
import { InstituteLoginComponent } from './Institute/institue-login.component';
import { StateLoginComponent } from './State/state-login.component';
import { MinistryLoginComponent } from './Ministry/ministry-login.component';
import { InstituteSuccessComponent } from './Institute/institute-success.component';
import { StudentSuccessComponent } from './Student/student-success.component';
import { StudentDashboardComponent } from './Student/student-dashboard.component';
import { InstituteLoginService } from './Institute/institute-login-service';
import { InstituteDashboardComponent } from './Institute/institute-dashboard.component';


const appRoutes: Routes= [
  {path:'home-page',component:HomePageComponent},
  {path:'student-login',component:StudentLoginComponent},
  {path:'institute-login',component:InstituteLoginComponent},
  {path:'state-login',component:StateLoginComponent},
  {path:'ministry-login',component:MinistryLoginComponent},
  {path:'student-registration',component:StudentRegistrationComponent},
  {path:'institute-registration',component:InstituteRegistrationComponent},
  {path:'institute-success',component:InstituteSuccessComponent},
  {path:'student-success',component:StudentSuccessComponent},
  {path:'student-dashboard',component:StudentDashboardComponent},
  {path:'institute-dashboard',component:InstituteDashboardComponent},
  {path:'scholarship-application',component:ScholarshipApplicationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    ScholarshipApplicationComponent,
    HomePageComponent,
    InstituteRegistrationComponent,
    StudentLoginComponent,
    InstituteLoginComponent,
    StateLoginComponent,
    MinistryLoginComponent,
    HeaderComponent,
    FooterComponent,
    InstituteSuccessComponent,
    StudentSuccessComponent,
    StudentDashboardComponent,
    InstituteDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    ),
    AppRoutingModule
  ],

  providers: [HttpClient,StudentLoginService,StudentService,InstituteService,ScholarshipApplicationService,InstituteLoginService ],

  bootstrap: [AppComponent]
})


export class AppModule { }
