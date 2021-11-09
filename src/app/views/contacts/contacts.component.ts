import { Component, OnInit } from '@angular/core';
import { Contact } from "../../models/contact"

@Component({
  selector: 'app-contacts',
  template: `
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
    >
      Nuovo contatto
    </button>
  `,
  styles: [
  ]
})
export class ContactsComponent {

  contacts: Contact[] = [
    {
      _id: '2e773dcf-c47e-405b-907a-17fe65738995',
      name: 'Denis',
      surname: 'Shapovalov',
      iban: 'IT94O0300203280454679511331'
    },
    {
      _id: 'c390959c-4419-4325-ab33-9ad1099aa0ba',
      name: 'Carlos',
      surname: 'Alcaraz',
      iban: 'IT53U0300203280438972383884'
    },
    {
      _id: '60648987-f047-4e4f-a7e4-57f7dd043435',
      name: 'Jannik',
      surname: 'Sinner',
      iban: 'IT92H0300203280391283244434'
    }
  ]

  constructor() { }

  confirm(contactID: string) {
    console.log('confirm contact: ', contactID)
  }

  edit(contactID: string) {
    console.log('edit contact: ', contactID)
  }

  delete(contactID: string) {
    console.log('delete contact: ', contactID)
  }

}
