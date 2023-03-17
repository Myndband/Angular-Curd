import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddngformComponent } from './addngform/addngform.component';
import { AllinOneComponent } from './allin-one/allin-one.component';
import { EditngformComponent } from './editngform/editngform.component';
import { ViewngformComponent } from './viewngform/viewngform.component';

const routes: Routes = [
  {path:"ng",component:ViewngformComponent},
  {path:"edit-ng/:id",component:EditngformComponent},
  {path:"edit-ng",component:EditngformComponent},
  {path:"add-ng",component:AddngformComponent},
  {path:"allin-One",component:AllinOneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempformRoutingModule { }
