import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from "./cards.component"
import { CardListComponent } from "./components/card-list.component"
import { CardFormComponent } from "./components/card-form.component"
import { MaterialModule } from "../../shared/material/material.module"
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [ CardsComponent, CardListComponent, CardFormComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    CardsRoutingModule,
    FormsModule
  ]
})
export class CardsModule {}
