import { Component } from '@angular/core';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-root',
  template: `


    <app-login>
      <app-signin></app-signin>
    </app-login>

    <app-login>
      <app-register></app-register>
    </app-login>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'fintech-frontend';




  fillForm2(f: NgForm) {
    f.setValue({ email: 'asd@asd.com', password: 'asdasdzz1'})
  }
}
