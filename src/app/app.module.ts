import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { DetailsComponent1 } from './details/details.component.1';
import { ForgotComponent } from './forgot/forgot.component';

import { TeacherService } from '../app/teacher.service';
import { StudentService } from './student.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DetailsComponent,
    DetailsComponent1,
    ForgotComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [TeacherService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
