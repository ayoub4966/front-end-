import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotRoutingModule } from './hot-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    HotRoutingModule,FormsModule,ReactiveFormsModule,ClarityModule
  ],
  exports:[ClarityModule,LoginComponent]
})
export class HotModule { }
