import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { Card } from "../../models/Card"
import { cards } from "../../../server/cards"
import { MatDialog } from "@angular/material/dialog"
import { DialogComponent } from "../dialog/dialog.component"
import { MatSnackBar } from "@angular/material/snack-bar"

@Component({
  selector: 'app-transfer',
  template: `
    <form #f="ngForm" (ngSubmit)="sendTransferHandler(f)">

      <button type="button" (click)="fillForm(f)">fill form</button>

      <button
        mat-raised-button
        class="submit-btn"
        color="accent"
        type="submit"
        (click)="open()"
      ></button>

      <!-- NOME -->
      <div>
        <mat-form-field appearance="outline">
          <mat-label>Nome</mat-label>
          <input
            [ngModel]
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
            [ngModel]
            #lastnameRef="ngModel"
            name="lastname"
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
            [ngModel]
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

      <!-- IMPORTO -->
      <div>
        <mat-form-field appearance="outline">
          <mat-label>Importo</mat-label>
          <input
            [ngModel]
            #amountRef="ngModel"
            name="amount"
            type="text"
            matInput
            placeholder="Importo"
            pattern="^[1-9]\\d*(\\.\\d+)?$"
            required>
          <mat-error *ngIf="(amountRef.dirty || amountRef.touched) && amountRef.errors?.required">
            Campo obbligatorio
          </mat-error>
          <mat-error *ngIf="(amountRef.dirty || amountRef.touched) && amountRef.errors?.pattern">
            Importo non corretto
          </mat-error>

        </mat-form-field>
      </div>

      <!-- CARTA -->
      <div>
        <mat-form-field appearance="outline">
          <mat-label>Seleziona una carta</mat-label>
          <mat-select
            #cardRef="ngModel"
            ngModel
            name="card"
            required
          >
            <mat-option *ngFor="let card of cards" [value]="card._id">
              {{ card.number }}
            </mat-option>
          </mat-select>
          <mat-error *ngIf="cardRef.errors?.required">Campo obbligatorio</mat-error>
        </mat-form-field>
      </div>

      <button
        mat-raised-button
        class="submit-btn"
        color="primary"
        type="submit"
        [disabled]="f.invalid"
      >
        Trasferisci denaro
      </button>

    </form>
  `,
  styles: [
  ]
})
export class TransferComponent implements OnInit {

  cards: Card[] = cards

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  sendTransferHandler(f: NgForm) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: {
        title: 'Conferma di trasferimento',
        message: 'Confermi l\'invio del pagamento?',
        cancelAction: 'Annulla',
        confirmAction: 'Conferma'
      },
    });

    dialogRef.afterClosed().subscribe((isTransferConfirmed: boolean) => {
      if (isTransferConfirmed) this.openSnackBar('Trasferimento confermato', 'Ok')
      else this.openSnackBar('Trasferimento annullato', 'Ok')
    });

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  open() {

  }

  fillForm(f: NgForm) {
    f.setValue({
      name: 'Ale',
      lastname: 'Elle',
      iban: 'IT22F0300203280467279263347',
      amount: '500',
      card: '7b5e401c-a781-49cc-907b-7f253b1dbf77'
    })
  }
}
