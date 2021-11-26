import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from "./contacts.component"
import { ContactListComponent } from "./components/contact-list.component"
import { ContactFormComponent } from "./components/contact-form.component"
import { MaterialModule } from "../../shared/material/material.module"
import { FormsModule } from "@angular/forms"
import { FilterPipe } from "../filter.pipe"


@NgModule({
  declarations: [ContactsComponent, ContactListComponent, ContactFormComponent, FilterPipe],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [ ContactsComponent ]
})
export class ContactsModule {}
