import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { LocationsComponent } from "./locations.component"
import { MaterialModule } from "../../shared/material/material.module"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { LocationListComponent } from "./components/location-list.component"
import { LocationContactComponent } from "./components/location-contact.component"
import { LocationMapComponent } from "./components/location-map.component"


@NgModule({
  declarations: [LocationsComponent, LocationListComponent, LocationContactComponent, LocationMapComponent],
  exports: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppointmentsModule { }
