import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <mat-card>
      <mat-card-content>
        <router-outlet></router-outlet>
        <a class="form-change-link" (click)="showLogin = !showLogin">{{ showLogin ? 'Crea un nuovo account' : 'Hai già un account? Accedi' }}</a>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      width: 350px;
    }

    a.form-change-link {
      display: inline-block;
      margin: 15px 0;
      text-decoration: underline;
      cursor: pointer;
    }

  `]
})
export class LoginComponent implements OnInit {

  showLogin: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
