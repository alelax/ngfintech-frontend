import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from "./login.component"
import { FormsModule } from "@angular/forms"
import { MaterialModule } from "../../shared/material/material.module"
import { RegisterComponent } from "./components/register.component"
import { SigninComponent } from "./components/signin.component"


@NgModule({
  declarations: [ LoginComponent, RegisterComponent, SigninComponent ],
  exports: [ LoginComponent ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class LoginModule { }
