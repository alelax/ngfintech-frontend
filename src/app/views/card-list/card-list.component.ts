import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
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

  @Input() cards: Card[] | null = null
  @Output() showMovements = new EventEmitter<string>()
  @Output() removeCard = new EventEmitter<string>()
  @Output() addCard = new EventEmitter<void>()


  constructor() { }

  ngOnInit(): void {
  }

}
