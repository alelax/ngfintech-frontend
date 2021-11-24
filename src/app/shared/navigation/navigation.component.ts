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
        <mat-sidenav #sidenav>
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
          <p *ngFor="let content of fillerContent">{{content}}</p>
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
      link: ''
    },
    {
      name: 'Movimenti',
      icon: 'receipt_long',
      link: ''
    },
    {
      name: 'Trasferisci',
      icon: 'paid',
      link: ''
    },
    {
      name: 'Appuntamenti',
      icon: 'event',
      link: ''
    },
    {
      name: 'Tasse',
      icon: 'summarize',
      link: ''
    }

  ]

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

}
