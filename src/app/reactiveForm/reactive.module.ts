import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { AddreactiveformComponent } from './addreactiveform/addreactiveform.component';
import { EditreactiveformComponent } from './editreactiveform/editreactiveform.component';
import { ViewreactiveformComponent } from './viewreactiveform/viewreactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllInOneComponent } from './all-in-one/all-in-one.component';


@NgModule({
  declarations: [
    AddreactiveformComponent,
    EditreactiveformComponent,
    ViewreactiveformComponent,
    AllInOneComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    AddreactiveformComponent,
    EditreactiveformComponent,
    ViewreactiveformComponent
  ]
})
export class ReactiveModule { }
