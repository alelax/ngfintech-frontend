import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from "./transfer.component"
import { MaterialModule } from "../../shared/material/material.module"
import { FormsModule } from "@angular/forms"


@NgModule({
  declarations: [ TransferComponent ],
  imports: [
    CommonModule,
    TransferRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class TransferModule { }
