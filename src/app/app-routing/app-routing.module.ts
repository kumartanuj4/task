
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DetailsComponent } from '../details/details.component';
import { ForgotComponent } from '../forgot/forgot.component';
import { DetailsComponent1 } from '../details/details.component.1';

const routes: Routes =[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:  LoginComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'forgot', component:  ForgotComponent },
  { path: 'details', component:  DetailsComponent },
  { path: 'studetails', component:  DetailsComponent1 }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }