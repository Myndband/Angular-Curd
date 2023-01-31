import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./reactiveForm/reactive.module').then(m => m.ReactiveModule) },
  { path: '', loadChildren: () => import('./tempForm/tempform.module').then(m => m.TempformModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
