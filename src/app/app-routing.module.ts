import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'hot',loadChildren:()=>import('./auth/hot.module').then(m=>m.HotModule)},
  {path:'loginee',loadChildren:()=>import('./authent/authent.module').then(m=>m.AuthentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
