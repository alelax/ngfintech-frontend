import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./shared/material/material.module"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

// COMPONENTS
import { SigninComponent } from './views/signin/signin.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { CardListComponent } from './views/card-list/card-list.component';
import { CardFormComponent } from './views/card-form/card-form.component';
import { CardsComponent } from './views/cards/cards.component';
import { MovementComponent } from './views/movement/movement.component';
import { MovementsComponent } from './views/movements/movements.component';
import { TruncatePipe } from './views/truncate.pipe';
import { TimestampTransformPipe } from './views/timestamp-transform.pipe';
import { TransferComponent } from './views/transfer/transfer.component';
import { DialogComponent } from './views/dialog/dialog.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { ContactListComponent } from './views/contact-list/contact-list.component';
import { FilterPipe } from './views/filter.pipe';
import { ContactFormComponent } from './views/contact-form/contact-form.component';
import { LocationListComponent } from './views/location-list/location-list.component';
import { LocationsComponent } from './views/locations/locations.component';
import { LocationContactComponent } from './views/location-contact/location-contact.component';
import { LocationMapComponent } from './views/location-map/location-map.component';

@NgModule({
  declarations: [
    AppComponent,

    // BASE COMPONENTS
    SigninComponent,
    RegisterComponent,
    LoginComponent,
    CardListComponent,
    CardFormComponent,
    CardsComponent,
    MovementComponent,
    MovementsComponent,
    DialogComponent,
    LocationListComponent,
    LocationsComponent,
    TransferComponent,
    ContactsComponent,
    ContactListComponent,
    FilterPipe,
    ContactFormComponent,
    LocationContactComponent,
    LocationMapComponent,
    LocationMapComponent,

    // PIPES
    TruncatePipe,
    TimestampTransformPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
