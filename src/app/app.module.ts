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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveModule,
    TempformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
