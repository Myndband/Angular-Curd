import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewngformComponent } from './tempForm/viewngform/viewngform.component';
import { AddngformComponent } from './tempForm/addngform/addngform.component';
import { EditngformComponent } from './tempForm/editngform/editngform.component';
import { AddreactiveformComponent } from './reactiveForm/addreactiveform/addreactiveform.component';
import { EditreactiveformComponent } from './reactiveForm/editreactiveform/editreactiveform.component';
import { ViewreactiveformComponent } from './reactiveForm/viewreactiveform/viewreactiveform.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveModule } from './reactiveForm/reactive.module';
import { TempformModule } from './tempForm/tempform.module';
import { DynamicComponent } from './dynamic/dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveModule,
    TempformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
