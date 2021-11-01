import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <mat-card>
      <ng-content></ng-content>
    </mat-card>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
