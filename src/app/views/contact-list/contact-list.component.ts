import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Contact } from "../../models/contact"

@Component({
  selector: 'app-contact-list',
  template: `
    <mat-card>

      <mat-card-header>
        <mat-form-field appearance="outline">
          <mat-label>Cerca</mat-label>
          <input
            [ngModel]
            #contactRef="ngModel"
            name="contact"
            type="text"
            matInput
            placeholder="Cerca">
        </mat-form-field>
      </mat-card-header>

      <mat-card-content>

        <p>Contatti</p>

        <mat-list role="list">

          <mat-list-item role="listitem" class="contact-list-item" *ngFor="let contact of contacts">

            <div class="contact-item-icon">
              <mat-icon>account_circle</mat-icon>
            </div>

            <div class="contact-item-details">
              <div class="contact-item-detail-top">
                <span class="contact-name">{{ contact.name }} {{ contact.surname }}</span>
              </div>
              <div class="contact-item-detail-bottom">
                <span class="contact-iban">{{ contact.iban }}</span>
              </div>
            </div>

            <div class="contact-item-actions">
              <mat-icon class="l-margin-5" matTooltip="Seleziona contatto" (click)="confirmContact.emit(contact._id)">done</mat-icon>
              <mat-icon class="l-margin-5" matTooltip="Modifica contatto" (click)="editContact.emit(contact._id)">mode_edit</mat-icon>
              <mat-icon class="l-margin-5" matTooltip="Rimuovi contatto" (click)="deleteContact.emit(contact._id)">delete</mat-icon>
            </div>

          </mat-list-item>

        </mat-list>

      </mat-card-content>


    </mat-card>
  `,
  styles: [`
    .mat-card-header-text {
      margin: 0;
    }
    .contact-list-item {
      width: 100%;
      display: flex;
      align-items: center;

      & .contact-item-details {
        flex-grow: 3;
        padding: 0 20px;

        & .contact-name {
          font-size: 14px;
        }

        & .contact-iban {
          font-weight: bold;
        }

      }

      & .contact-item-icon, & .contact-item-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        & mat-icon.l-margin-5 {
          margin-left: 5px;
        }
      }
    }
  `]
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[] | null = null

  @Output() confirmContact = new EventEmitter<string>()
  @Output() editContact = new EventEmitter<string>()
  @Output() deleteContact = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
