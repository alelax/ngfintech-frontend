import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Card } from "../../models/Card"

@Component({
  selector: 'app-card-list',
  template: `
    <mat-card>

      <mat-card-title>Carte</mat-card-title>

      <mat-card-content>

        <mat-list role="list">
          <mat-list-item role="listitem" class="card-list-item" *ngFor="let card of cards">
            <div class="card-item-icon">
              <mat-icon>credit_card</mat-icon>
            </div>
            <div class="card-item-details">
              <div class="card-item-detail-top">
                <span class="card-number">{{ card.number }}</span>
              </div>
              <div class="card-item-detail-bottom">
                <span class="card-balance">{{ card.amount }} €</span> - <span class="card-type">{{ card.type }}</span>
              </div>
            </div>
            <div class="card-item-actions">
              <mat-icon matTooltip="Vedi movimenti" (click)="showMovements.emit(card._id)">receipt</mat-icon>
              <mat-icon matTooltip="Rimuovi carta" (click)="removeCard.emit(card._id)">delete</mat-icon>
            </div>
          </mat-list-item>
        </mat-list>

      </mat-card-content>

      <mat-card-actions>
        <button
          mat-raised-button
          class="submit-btn"
          color="primary"
          type="submit"
          (click)="addCard.emit()"
        >
          Aggiungi
        </button>
      </mat-card-actions>
    </mat-card>

  `,
  styles: [`
    .card-list-item {
      width: 100%;
      display: flex;
      align-items: center;

      & .card-item-details {
        flex-grow: 3;
        padding: 0 20px;

        & .card-number {
          font-size: 14px;
        }

        & .card-balance {
          font-weight: bold;
        }

      }

      & .card-item-icon, & .card-item-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
    }
  `]
})
export class CardListComponent implements OnInit {

  @Output() showMovements = new EventEmitter<string>()
  @Output() removeCard = new EventEmitter<string>()
  @Output() addCard = new EventEmitter<void>()

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

  constructor() { }

  ngOnInit(): void {
  }

}
