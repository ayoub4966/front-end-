import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path:'List-user',component:UserComponent},
  {path:'delete-user',component:DeleteUserComponent},
  {path:'add-user',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
