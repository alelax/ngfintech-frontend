import { Component } from '@angular/core'
import { ThemePalette } from "@angular/material/core"
import { MovementType } from "./models/movement"

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>

      <!--<mat-slide-toggle
        [color]="color"
        [(ngModel)]="checked"
        (toggleChange)="toggleTheme()">
        <mat-icon>{{ checked ? 'dark_mode' : 'wb_sunny' }}</mat-icon>
      </mat-slide-toggle>-->

      <!--<app-cards></app-cards>-->
      <!--<app-card-list (showMovements)="showMovements($event)" (removeCard)="removeCard($event)" (addCard)="addCard()"></app-card-list>-->

      <!--<app-movements></app-movements>-->

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

      <!--<app-transfer></app-transfer>-->


      <!--<app-contacts></app-contacts>-->

      <!--<app-location-list></app-location-list>-->
      <!--<app-locations></app-locations>-->



  `,
  styles: [`
    mat-slide-toggle {
      margin: 10px;
    }
  `]
})
export class AppComponent {

  title = 'fintech-frontend';
  color: ThemePalette = 'primary';
  // @ViewChild('formRef', { read: CardFormComponent }) element!: CardFormComponent;


  checked: boolean | null = null;
  type: MovementType = 'in'

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
