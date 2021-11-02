import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { NgForm } from "@angular/forms"

interface CardType {
  value: 'visa' | 'mastercard',
  label: 'Visa' | 'Mastercard'
}

@Component({
  selector: 'app-card-form',
  template: `
    <mat-card>
      <mat-card-content>
        <form #f="ngForm" (ngSubmit)="save(f)">

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
            Registrati
          </button>

          <button
            mat-raised-button
            class="submit-btn"
            color="accent"
            type="button"
            (click)="cleanup()"
          >
            Reset
          </button>


        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    div.row-input {
      display: flex;
      justify-content: space-between;
      align-items: center;

      mat-form-field {
        width: 49.5%;
      }
    }
  `]
})
export class CardFormComponent {

  @ViewChild('f', { read: NgForm }) form!: NgForm;

  cardTypes: CardType[] = [
    { value: 'visa', label: 'Visa' },
    { value: 'mastercard', label: 'Mastercard' }
  ]

  constructor() { }

  save(f: NgForm) {
    console.log('form data: ', f.value)
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

  cleanup() {
    this.form.reset()
  }

}
