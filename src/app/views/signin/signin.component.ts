import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-signin',
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
            <mat-icon matPrefix>person</mat-icon>

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
            <mat-label>Password</mat-label>
            <input
              [ngModel]
              #pwRef="ngModel"
              name="password"
              [type]="showPwToggle ? 'text' : 'password'"
              matInput
              placeholder="Password"
              pattern="^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
              required>
            <mat-icon matPrefix>lock</mat-icon>
            <mat-icon (click)="showPwToggle = !showPwToggle"
                      matSuffix>{{ showPwToggle ? 'visibility' : 'visibility_off' }}</mat-icon>
            <mat-error *ngIf="(pwRef.dirty || pwRef.touched) && pwRef.errors?.required">
              Campo obbligatorio
            </mat-error>
            <mat-error *ngIf="(pwRef.dirty || pwRef.touched) && pwRef.errors?.pattern">
              La password deve contenere almeno 8 caratteri, con almeno un numero e una lettera
            </mat-error>

          </mat-form-field>
        </div>

        <div>
          <button
            mat-raised-button
            class="submit-btn"
            color="primary"
            type="submit"
            [disabled]="f.invalid"
          >
            Login
          </button>
        </div>


      </form>
  `,
  styles: []
})
export class SigninComponent implements OnInit {

  showPwToggle: boolean = false

  constructor() { }

  ngOnInit(): void {}

  save(f: NgForm) {
    console.log('form value: ', f.value)
  }

  fillForm(f: NgForm) {
    f.setValue({ email: 'asd@asd.com', password: 'asdasdzz1'})
  }

}
