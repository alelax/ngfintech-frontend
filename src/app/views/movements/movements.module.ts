import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementsRoutingModule } from './movements-routing.module';
import { MovementsComponent } from "./movements.component"
import { MaterialModule } from "../../shared/material/material.module"
import { FormsModule } from "@angular/forms"
import { MovementComponent } from "./components/movement.component"
import { TimestampTransformPipe } from "../timestamp-transform.pipe"
import { TruncatePipe } from "../truncate.pipe"


@NgModule({
  declarations: [ MovementsComponent, MovementComponent, TimestampTransformPipe, TruncatePipe ],
  exports: [ MovementsComponent ],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class MovementsModule { }
