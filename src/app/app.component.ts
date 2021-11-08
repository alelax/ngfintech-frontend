import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { NgForm } from "@angular/forms"
import { ThemePalette } from "@angular/material/core"
import { CardFormComponent } from "./views/card-form/card-form.component"
import { Movement, MovementType } from "./models/Movement"

@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="checked ? 'darkMode' : ''">

      <mat-slide-toggle
        [color]="color"
        [(ngModel)]="checked"
        (toggleChange)="toggleTheme()">
        <mat-icon>{{ checked ? 'dark_mode' : 'wb_sunny' }}</mat-icon>
      </mat-slide-toggle>

      <!--<app-cards></app-cards>-->
      <!--<app-card-list (showMovements)="showMovements($event)" (removeCard)="removeCard($event)" (addCard)="addCard()"></app-card-list>-->

      <app-movements></app-movements>

      <!--<app-card-form #formRef></app-card-form>-->

      <!--<button
        mat-raised-button
        class="submit-btn"
        color="primary"
        type="button"
        (click)="cleanup()"
      >
        Reset
      </button>-->

      <router-outlet></router-outlet>
    </div>

  `,
  styles: [`
    mat-slide-toggle {
      margin: 10px;
    }
  `]
})
export class AppComponent {

  // @ViewChild('formRef', { read: CardFormComponent }) element!: CardFormComponent;

  color: ThemePalette = 'primary';
  checked: boolean | null = null;

  date = new Date();
  type: MovementType = 'in'
  title = 'fintech-frontend';

  constructor() {
    this.themeSetup()
  }

  toggleTheme() {
    this.checked = !this.checked
    localStorage.setItem('theme', this.checked ? 'dark' : 'light')
  }

  themeSetup() {
    this.checked = !!(localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark')
  }

  showMovements(cardId: string) {
    console.log('show movements: ', cardId)
  }

  removeCard(cardId: string) {
    console.log('remove card: ', cardId)
  }

  addCard() {
    console.log('add card')
  }

  /*ngAfterViewInit() {
    console.log('form NG AFTER: ', this.element)
  }*/

  /*cleanup() {
    console.log('form: ', this.element)
    this.element.form.reset()
  }*/
}
