import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { NgForm } from "@angular/forms"
import { Card } from "../../../models/card"

interface CardType {
  value: 'visa' | 'mastercard',
  label: 'Visa' | 'Mastercard'
}

@Component({
  selector: 'app-card-form',
  template: `
    <mat-card>
      <mat-card-content>
        <form #f="ngForm" (ngSubmit)="save(f, $event)">

          <button type="button" (click)="fillForm(f)">fill form</button>

          <div>
            <mat-form-field appearance="outline">
              <mat-label>Tipo di carta</mat-label>
              <mat-select #cardTypeRef="ngModel" ngModel name="cardType" required>
                <mat-option [value]="">Seleziona tipo di carta</mat-option>
                <mat-option *ngFor="let cardType of cardTypes" [value]="cardType.value">
                  {{ cardType.label }}
                </mat-option>
              </mat-select>
              <mat-error *ngIf="cardTypeRef.errors?.required">Campo obbligatorio</mat-error>
            </mat-form-field>
          </div>

          <div class="row-input">
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

          <div>
            <mat-form-field appearance="outline">
            <mat-label>N° Carta</mat-label>
            <input
              [ngModel]
              #cardNumberRef="ngModel"
              name="cardNumber"
              type="text"
              matInput
              placeholder="Numero carta"
              pattern="[0-9]+"
              minlength="16"
              maxlength="16"
              required>
            <mat-error *ngIf="(cardNumberRef.dirty || cardNumberRef.touched) && cardNumberRef.errors?.required">
              Campo obbligatorio
            </mat-error>
            <mat-error *ngIf="(cardNumberRef.dirty || cardNumberRef.touched) && cardNumberRef.errors?.pattern">
              Possono essere inseriti solo numeri
            </mat-error>
            <mat-error *ngIf="(cardNumberRef.dirty || cardNumberRef.touched) && (cardNumberRef.errors?.minlength || cardNumberRef.errors?.maxlength)">
              Il codice deve essere formato da 16 numeri
            </mat-error>

          </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline">
              <mat-label>Codice di sicurezza</mat-label>
              <input
                [ngModel]
                #cvvRef="ngModel"
                name="cvv"
                type="text"
                matInput
                placeholder="Codice sicurezza"
                pattern="[0-9]+"
                minlength="3"
                maxlength="3"
                required>
              <mat-error *ngIf="(cvvRef.dirty || cvvRef.touched) && cvvRef.errors?.required">
                Campo obbligatorio
              </mat-error>
              <mat-error *ngIf="(cvvRef.dirty || cvvRef.touched) && cvvRef.errors?.pattern">
                Possono essere inseriti solo numeri
              </mat-error>
              <mat-error *ngIf="(cvvRef.dirty || cvvRef.touched) && (cvvRef.errors?.minlength || cvvRef.errors?.maxlength)">
                Il codice deve essere formato da 3 numeri
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
            Aggiungi carta
          </button>

          <button
            mat-raised-button
            class="submit-btn"
            color="accent"
            type="button"
            (click)="cancel.emit()"
          >
            Annulla
          </button>

        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`

    mat-card {
      height: fit-content;
      overflow-y: hidden;

      div.row-input {
        display: flex;
        justify-content: space-between;
        align-items: center;

        mat-form-field {
          width: 49.5%;
        }
      }
    }

  `]
})
export class CardFormComponent {

  @ViewChild('f', { read: NgForm }) form!: NgForm;

  @Output() saveData = new EventEmitter<Card>()
  @Output() cancel = new EventEmitter<void>()

  cardTypes: CardType[] = [
    { value: 'visa', label: 'Visa' },
    { value: 'mastercard', label: 'Mastercard' }
  ]

  save(f: NgForm, e: MouseEvent) {
    e.preventDefault()

    const newCard: Card = {
      _id: "7b5e401c-a781-49cc-907b-7f253b1dbf88",
      number: f.value.cardNumber,
      ownerId: "al45er5e6fba",
      owner: `${f.value.name} ${f.value.lastname}`,
      type: f.value.cardType,
      amount: 3000
    }
    this.saveData.emit(newCard)
  }

  fillForm(f: NgForm) {
    f.setValue({
      cardType: 'mastercard',
      name: 'Ale',
      lastname: 'Elle',
      cardNumber: '1111222233334444',
      cvv: '123'
    })
  }

  /*cleanup() {
    this.form.reset()
  }*/

}
