import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from "@angular/router"
import { MaterialModule } from "../material/material.module"
import { FormsModule } from "@angular/forms"



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ],
  exports: [ NavigationComponent ]
})
export class NavigationModule { }
