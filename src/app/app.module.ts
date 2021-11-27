import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

// SHARED MODULES
import { DialogComponent } from './views/dialog/dialog.component';
import { CardsModule } from "./views/cards/cards.module"
import { ContactsModule } from "./views/contacts/contacts.module"
import { AppointmentsModule } from "./views/appointments/appointments.module"
import { MovementsModule } from "./views/movements/movements.module"
import { LoginModule } from "./views/login/login.module"
import { TransferModule } from "./views/transfer/transfer.module"

// SHARED MODULE
import { MaterialModule } from "./shared/material/material.module"

const featuresModule = [ CardsModule,  ContactsModule,  AppointmentsModule,  MovementsModule,  LoginModule,  TransferModule]
const sharedModule = [ MaterialModule ]

@NgModule({
  declarations: [
    AppComponent,

    // BASE COMPONENTS

    DialogComponent,



    // PIPES

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...featuresModule,
    ...sharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
