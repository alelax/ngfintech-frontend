import { Component, OnInit, ViewChild } from '@angular/core'
import { Card } from "../../models/card"
import { CardFormComponent } from "./components/card-form.component"
import { MatDrawer } from "@angular/material/sidenav"
import { MatSnackBar } from "@angular/material/snack-bar"

@Component({
  selector: 'app-cards',
  template: `
    <mat-drawer-container>

      <mat-drawer #drawer position="end" mode="side">
        <app-card-form
          (saveData)="addCard($event)"
          (cancel)="cancelData()"
        ></app-card-form>
      </mat-drawer>

      <mat-drawer-content>
        <app-card-list
          [cards]="cards"
          (addCard)="drawer.toggle()"
          (removeCard)="removeCard($event)"
        ></app-card-list>
      </mat-drawer-content>

    </mat-drawer-container>
  `,
  styles: [`
    mat-drawer-container {
      min-height: 100vh;

      & mat-drawer, & mat-drawer-content {
        height: fit-content;
      }
    }
  `]
})
export class CardsComponent {

  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild(CardFormComponent, { read: CardFormComponent }) element!: CardFormComponent;

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

  constructor(private _snackBar: MatSnackBar) {}

  removeCard($event: string) {
    this.cards = this.cards.filter( card => card._id !== $event )
    this.openSnackBar('Carta rimossa correttamente', 'Ok')
  }

  addCard($event: Card) {
    this.cards = [ ...this.cards, $event ]
    this.closeDrawer()
    this.openSnackBar('Carta aggiunta correttamente', 'Ok')
  }

  cancelData() { this.closeDrawer() }

  private dispose() { this.element.form.reset() }

  private closeDrawer() {
    /* CHIEDERE */
    this.dispose()
    this.drawer.close().then()
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}

// CHIEDERE PERCHÈ DOPO ADD FORM RIMANE CON ERRORI

