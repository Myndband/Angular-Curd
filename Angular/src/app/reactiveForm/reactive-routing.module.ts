import { ViewreactiveformComponent } from './viewreactiveform/viewreactiveform.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreactiveformComponent } from './addreactiveform/addreactiveform.component';
import { EditreactiveformComponent } from './editreactiveform/editreactiveform.component';
import { AllInOneComponent } from './all-in-one/all-in-one.component';

const routes: Routes = [
  // {path:"",redirectTo:'/reactive',pathMatch:'full'},
  {path:"reactive",component:ViewreactiveformComponent},
  {path:"edit-reactive/:id",component:EditreactiveformComponent},
  {path:"edit-reactive",component:EditreactiveformComponent},
  {path:"add-reactive",component:AddreactiveformComponent},
  {path:"all-In-One",component:AllInOneComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
