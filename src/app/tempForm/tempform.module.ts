import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempformRoutingModule } from './tempform-routing.module';
import { AddngformComponent } from './addngform/addngform.component';
import { EditngformComponent } from './editngform/editngform.component';
import { ViewngformComponent } from './viewngform/viewngform.component';
import { FormsModule } from '@angular/forms';
import { AllinOneComponent } from './allin-one/allin-one.component';


@NgModule({
  declarations: [
    ViewngformComponent,
    AddngformComponent,
    EditngformComponent,
    AllinOneComponent,
  ],
  imports: [
    CommonModule,
    TempformRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ViewngformComponent,
    AddngformComponent,
    EditngformComponent,
    AllinOneComponent
  ]
})
export class TempformModule { }
