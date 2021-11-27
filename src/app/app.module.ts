import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./shared/material/material.module"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

// COMPONENTS
import { TransferComponent } from './views/transfer/transfer.component';
import { DialogComponent } from './views/dialog/dialog.component';
import { NavigationModule } from "./shared/navigation/navigation.module"
import { CardsModule } from "./views/cards/cards.module"
import { ContactsModule } from "./views/contacts/contacts.module"
import { AppointmentsModule } from "./views/appointments/appointments.module"
import { MovementsModule } from "./views/movements/movements.module"
import { LoginModule } from "./views/login/login.module"

@NgModule({
  declarations: [
    AppComponent,

    // BASE COMPONENTS

    DialogComponent,


    TransferComponent,

    // PIPES

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

    NavigationModule,
    CardsModule,
    ContactsModule,
    AppointmentsModule,
    MovementsModule,
    LoginModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
