import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core'
import { NgForm } from "@angular/forms"
import { Contact } from "../../models/contact"

@Component({
  selector: 'app-contact-form',
  template: `
    <mat-card>

      <mat-card-content>

        <form #f="ngForm" (ngSubmit)="save(f)">

          <!-- NOME -->
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Nome</mat-label>
              <input
                [ngModel]="initialContact?.name"
                #nameRef="ngModel"
                name="name"
                type="text"
                matInput
                placeholder="Nome"
                required>
              <mat-error *ngIf="(nameRef.dirty || nameRef.touched) && nameRef.errors?.required">
                Campo obbligatorio
              </mat-error>

            </mat-form-field>
          </div>

          <!-- COGNOME -->
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Cognome</mat-label>
              <input
                [ngModel]="initialContact?.surname"
                #lastnameRef="ngModel"
                name="surname"
                type="text"
                matInput
                placeholder="Cognome"
                required>
              <mat-error *ngIf="(lastnameRef.dirty || lastnameRef.touched) && lastnameRef.errors?.required">
                Campo obbligatorio
              </mat-error>

            </mat-form-field>
          </div>

          <!-- IBAN -->
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Iban</mat-label>
              <input
                [ngModel]="initialContact?.iban"
                #ibanRef="ngModel"
                name="iban"
                type="text"
                matInput
                placeholder="IBAN"
                pattern="^(it|IT)[0-9]{2}[A-Za-z][0-9]{10}[0-9A-Za-z]{12}$"
                required>
              <mat-error *ngIf="(ibanRef.dirty || ibanRef.touched) && ibanRef.errors?.required">
                Campo obbligatorio
              </mat-error>
              <mat-error *ngIf="(ibanRef.dirty || ibanRef.touched) && ibanRef.errors?.pattern">
                IBAN non corretto
              </mat-error>

            </mat-form-field>
          </div>

          <button
            mat-raised-button
            class="submit-btn"
            color="primary"
            type="submit"
            [disabled]="f.invalid"
          >
            Salva
          </button>

        </form>
      </mat-card-content>

    </mat-card>
  `,
  styles: [
  ]
})
export class ContactFormComponent {

  @Input() initialContact: Contact | null = null
  @Output() saveContact = new EventEmitter<Contact>()

  constructor() { }


  save(f: NgForm) {
    console.log('f value: ', f.value)
    let manipulatedContact: Contact

    if (this.initialContact) {
      manipulatedContact = {
        _id: this.initialContact._id,
        ...f.value
      }
      console.log('MODIFICA: ', manipulatedContact)
    } else {
      manipulatedContact = {
        _id: this.createUUID(),
        ...f.value
      }
      console.log('CREAZIONE: ', manipulatedContact)
    }

    this.saveContact.emit(manipulatedContact)
  }

  createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


}
