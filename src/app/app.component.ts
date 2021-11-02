import { Component, OnInit } from '@angular/core'
import { NgForm } from "@angular/forms"
import { ThemePalette } from "@angular/material/core"

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

      <app-login></app-login>

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

  color: ThemePalette = 'primary';
  checked: boolean | null = null;

  title = 'fintech-frontend';

  constructor() {
    this.themeSetup()
  }

  toggleTheme() {
    this.checked = !this.checked
    localStorage.setItem('theme', this.checked ? 'dark' : 'light')
  }

  private themeSetup() {
    this.checked = !!(localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark')
  }
}
