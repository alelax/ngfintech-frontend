import { Component } from '@angular/core'
import { Card } from "../../models/Card"
import { MatSelectChange } from "@angular/material/select"
import { Movement } from "../../models/Movement"
import { cardMovements } from "../../../server/movements"

@Component({
  selector: 'app-movements',
  template: `
    <div>
      <mat-form-field appearance="outline">
        <mat-label>Seleziona carta</mat-label>
        <mat-select
          (selectionChange)="selectCard($event)"
          #cardRef="ngModel"
          ngModel
          name="card"
        >
          <mat-option *ngFor="let card of cards" [value]="card._id">
            {{ card.number }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>

    <div *ngIf="selectedCard">
      Saldo: € {{ selectedCard.amount }}
    </div>

    <app-movement
      *ngFor="let movement of selectedMovements"
      [date]="movement.timestamp | timestampTransform"
      [amount]="movement.amount"
      [title]="movement.title"
      [type]="movement.type"
      [description]="movement.description"
    ></app-movement>

    <button
      mat-raised-button
      class="submit-btn"
      color="primary"
      (click)="showMore()"
      type="button"
      *ngIf="selectedMovements && selectedMovements.length"
    >
      Carica altro
    </button>




  `,
  styles: [
  ]
})
export class MovementsComponent {

  movements: Movement[] = cardMovements
  selectedMovements: Movement[] | null = null

  cards: Card[] = [
    {
      "_id": "7b5e401c-a781-49cc-907b-7f253b1dbf77",
      "number": "0000 0000 0000 0000",
      "ownerId": "et45er5e6fba",
      "owner": "Mario Rossi",
      "type": "visa",
      "amount": 15000
    },
    {
      "_id": "dcacc297-5323-463f-ac23-1df31b8aa287",
      "number": "1111 1111 1111 1111",
      "ownerId": "et45er5e6fba",
      "owner": "Mario Rossi",
      "type": "mastercard",
      "amount": 500
    },
    {
      "_id": "671cda70-94d2-4fb6-a3f9-593db951456f",
      "number": "2222 2222 2222 2222",
      "ownerId": "et45er5e6fba",
      "owner": "Mario Rossi",
      "type": "visa",
      "amount": 250000
    }
  ]

  selectedCard: Card | null = null

  constructor() {}

  selectCard(cardSelected: MatSelectChange) {
    this.selectedCard = this.cards.find( card => card._id === cardSelected.value ) || null
    this.selectedMovements = this.movements
      .filter( m => m.cardId === this.selectedCard?._id )
      .slice(0, 5)
  }

  showMore() {
    const lastElementLoaded = this.selectedMovements?.length

    if (lastElementLoaded) {
      this.selectedMovements = this.movements
        .filter( m => m.cardId === this.selectedCard?._id )
        .slice(0, lastElementLoaded + 5)
    }


  }
}
