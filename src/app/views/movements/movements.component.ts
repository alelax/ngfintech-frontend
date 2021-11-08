import { Component } from '@angular/core'
import { Card } from "../../models/Card"
import { MatSelectChange } from "@angular/material/select"
import { Movement } from "../../models/Movement"
import { cardMovements } from "../../../server/movements"
import { cards } from "../../../server/cards"

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

  cards: Card[] = cards

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
