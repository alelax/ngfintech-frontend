import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="example-container">
      <mat-toolbar color="primary" class="example-toolbar">
        <button mat-icon-button (click)="sidenav.toggle()"><mat-icon>menu</mat-icon></button>
        <h1 class="example-app-name">NgFintech</h1>
      </mat-toolbar>

      <mat-sidenav-container class="example-sidenav-container">
        <mat-sidenav #sidenav mode="side">
          <mat-nav-list>
            <a mat-list-item [routerLink]="nav.link" *ngFor="let nav of fillerNav">
              <mat-icon mat-list-icon>{{ nav.icon }}</mat-icon>
              {{ nav.name }}
            </a>
          </mat-nav-list>
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
  `,
  styles: [
  ]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  fillerNav = [
    {
      name: 'Home',
      icon: 'home',
      link: ''
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
      link: ''
    }

  ]



}
