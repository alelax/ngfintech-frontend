import { Component, OnInit } from '@angular/core';
import { Contact } from "../../models/contact"
import { MatDialogRef } from "@angular/material/dialog"
import { contacts } from "../../../server/contacts"

@Component({
  selector: 'app-contacts',
  template: `


    <ng-container *ngIf="showContactList">
      <app-contact-list
        [contacts]="contacts"
        (confirmContact)="confirm($event)"
        (editContact)="edit($event)"
        (deleteContact)="delete($event)"
      ></app-contact-list>

      <button
      mat-raised-button
      class="submit-btn"
      color="primary"
      type="submit"
      (click)="showContactList = false; contactToEdit = null"
    >
      Nuovo contatto
    </button>
    </ng-container>

    <ng-container *ngIf="!showContactList">
      <button
        mat-raised-button
        class="submit-btn"
        color="primary"
        type="button"
        (click)="showContactList = true"
      >
        Indietro
      </button>

      <app-contact-form
        [initialContact]="contactToEdit"
        (saveContact)="save($event)"
      ></app-contact-form>
    </ng-container>

  `,
  styles: [
  ]
})
export class ContactsComponent {

  contacts: Contact[] = contacts
  contactToEdit: Contact | null = null
  showContactList: boolean = true

  constructor(public dialogRef: MatDialogRef<ContactsComponent>) { }

  confirm(contactID: string) {
    this.dialogRef.close(contactID)
  }

  edit(contactID: string) {
    this.contactToEdit = this.contacts.find( c => c._id === contactID ) || null
    this.showContactList = false
  }

  delete(contactID: string) {
    console.log('delete contact: ', contactID)
  }


  save(contact: Contact) {
    this.showContactList = true
    this.contacts.find( c => c._id === contact._id)
      ? this.editContact(contact)
      : this.addContact(contact)
  }

  editContact(contact: Contact) {
    const index = this.contacts.findIndex(c => c._id === contact._id)
    this.contacts[index] = {
      ...contact
    };
  }

  private addContact(contact: Contact) {
    this.contacts = [ ...this.contacts, contact ]
  }
}
