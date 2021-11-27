import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ThemePalette } from "@angular/material/core"

type NavItem = {
  name: string,
  icon: string,
  link: string
}

@Component({
  selector: 'app-navigation',
  template: `
    <div [ngClass]="themeToggle ? 'darkMode' : ''">

      <div class="example-container">
        <mat-toolbar color="primary" class="toolbar">
          <div class="left-toolbar">
            <button mat-icon-button (click)="sidenav.toggle()"><mat-icon>menu</mat-icon></button>
            <h1 class="example-app-name">NgFintech</h1>
          </div>
          <div>
            <mat-slide-toggle
              [color]="color"
              [(ngModel)]="themeToggle"
              (toggleChange)="toggleTheme()">
              <mat-icon>{{ themeToggle ? 'dark_mode' : 'wb_sunny' }}</mat-icon>
            </mat-slide-toggle>
          </div>




        </mat-toolbar>

        <mat-sidenav-container class="example-sidenav-container">
          <mat-sidenav #sidenav mode="side" opened>
            <mat-nav-list>
              <a mat-list-item [routerLink]="nav.link" [routerLinkActive]="['is-active']" (click)="handleClick(nav)" *ngFor="let nav of fillerNav">
                <mat-icon mat-list-icon>{{ nav.icon }}</mat-icon>
                {{ nav.name }}
              </a>
            </mat-nav-list>
            <!--<mat-nav-list>
              <a mat-list-item routerLink="cards" [routerLinkActive]="['is-active']" >
                <mat-icon mat-list-icon>cards</mat-icon>
                CARTE
              </a>
              <a mat-list-item routerLink="transfer" [routerLinkActive]="['is-active']" >
                <mat-icon mat-list-icon>cards</mat-icon>
                TRASFERIMENTI
              </a>
            </mat-nav-list>-->
            <mat-nav-list>
              <a mat-list-item routerLink=".">
                <mat-icon mat-list-icon>person</mat-icon>
                <p>Alessandro Lausdei</p>
                <small>logout</small>
              </a>
            </mat-nav-list>
          </mat-sidenav>

          <mat-sidenav-content>
            <section style="width: 100%; height: 100vh;">
              <ng-content></ng-content>
            </section>

          </mat-sidenav-content>
        </mat-sidenav-container>

      </div>

    </div>
  `,
  styles: [`
    .toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & .left-toolbar {
        display: flex;
        align-items: center;
        width: fit-content;
      }
    }
    .mat-list-item.is-active {
      //background-color: #cecece;
    }
  `]
})
export class NavigationComponent {

  color: ThemePalette = 'primary';

  themeToggle: boolean | null = null;

  selectedItem: string | null = null;
  fillerNav: NavItem[]  = [
    {
      name: 'Home',
      icon: 'home',
      link: 'home'
    },
    {
      name: 'Carte',
      icon: 'credit_card',
      link: 'cards'
    },
    {
      name: 'Movimenti',
      icon: 'receipt_long',
      link: 'movements'
    },
    {
      name: 'Trasferisci',
      icon: 'paid',
      link: 'transfer'
    },
    {
      name: 'Appuntamenti',
      icon: 'event',
      link: 'appointments'
    },
    {
      name: 'Tasse',
      icon: 'summarize',
      link: 'taxes'
    }

  ]

  constructor() {
    this.themeSetup()
  }

  handleClick(selectedItem: NavItem) {
    this.selectedItem = selectedItem.link;
  }

  toggleTheme() {
    this.themeToggle = !this.themeToggle
    localStorage.setItem('theme', this.themeToggle ? 'dark' : 'light')
  }

  themeSetup() {
    this.themeToggle = !!(localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark')
  }


}
