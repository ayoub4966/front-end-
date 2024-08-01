import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogineComponent } from './logine/logine.component';

const routes: Routes = [
  {path:'logine',component:LogineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentRoutingModule { }
