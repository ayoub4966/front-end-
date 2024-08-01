import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentRoutingModule } from './authent-routing.module';
import { LogineComponent } from './logine/logine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    LogineComponent
  ],
  imports: [
    CommonModule,
    AuthentRoutingModule,FormsModule,ReactiveFormsModule,ClarityModule  ]
})
export class AuthentModule { }
