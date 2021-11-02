import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-register',
  template: `

      <form #f="ngForm" (ngSubmit)="save(f)">

        <button type="button" (click)="fillForm(f)">fill form</button>

        <div>
          <mat-form-field appearance="outline">
            <mat-label>Email</mat-label>
            <input
              [ngModel]
              #emailRef="ngModel"
              name="email"
              type="email"
              matInput
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
              required>
            <mat-error *ngIf="(emailRef.dirty || emailRef.touched) && emailRef.errors?.required">
              Campo obbligatorio
            </mat-error>
            <mat-error *ngIf="(emailRef.dirty || emailRef.touched) && emailRef.errors?.pattern">
              Indirizzo email non valido
            </mat-error>

          </mat-form-field>
        </div>

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

        <div>
          <mat-form-field appearance="outline">
          <mat-label>Password</mat-label>
          <input
            [ngModel]
            #pwRegisterRef="ngModel"
            name="password"
            [type]="showPwToggle ? 'text' : 'password'"
            matInput
            placeholder="Password"
            pattern="^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
            required>
          <mat-icon (click)="showPwToggle = !showPwToggle"
                    matSuffix>{{ showPwToggle ? 'visibility' : 'visibility_off' }}</mat-icon>
          <mat-error *ngIf="(pwRegisterRef.dirty || pwRegisterRef.touched) && pwRegisterRef.errors?.required">
            Campo obbligatorio
          </mat-error>
          <mat-error *ngIf="(pwRegisterRef.dirty || pwRegisterRef.touched) && pwRegisterRef.errors?.pattern">
            La password deve contenere almeno 8 caratteri, con almeno un numero e una lettera
          </mat-error>

        </mat-form-field>
        </div>

        <div>
          <mat-form-field appearance="outline">
          <mat-label>Conferma password</mat-label>
          <input
            [ngModel]
            #pwConfirmRef="ngModel"
            name="passwordConfirm"
            [type]="showPwToggle ? 'text' : 'password'"
            matInput
            placeholder="Conferma password"
            pattern="^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
            required>
          <mat-icon (click)="showPwToggle = !showPwToggle"
                    matSuffix>{{ showPwToggle ? 'visibility' : 'visibility_off' }}</mat-icon>
          <mat-error *ngIf="(pwConfirmRef.dirty || pwConfirmRef.touched) && pwConfirmRef.errors?.required">
            Campo obbligatorio
          </mat-error>
          <mat-error *ngIf="(pwConfirmRef.dirty || pwConfirmRef.touched) && pwConfirmRef.errors?.pattern">
            La password deve contenere almeno 8 caratteri, con almeno un numero e una lettera
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

      </form>
  `,
  styles: []
})
export class RegisterComponent implements OnInit {


  showPwToggle: boolean = false

  constructor() { }

  ngOnInit(): void {}

  save(f: NgForm) {
    if (f.value.password === f.value.passwordConfirm) console.log('form value: ', f.value)
    else console.log('Le password non coincidono')
  }

  fillForm(f: NgForm) {
    f.setValue({ email: 'asd@asd.com', name: 'Ale', lastname: 'Lausdei', password: 'asdasdzz1', passwordConfirm: 'asdasdzz1' })
  }

}
