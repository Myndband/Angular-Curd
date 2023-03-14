import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolebasedRoutingModule } from './rolebased-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    RolebasedRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RolebasedModule { }
