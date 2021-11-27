import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-navigation>
        <router-outlet></router-outlet>
    </app-navigation>
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
