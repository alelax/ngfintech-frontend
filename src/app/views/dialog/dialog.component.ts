import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from "@angular/material/dialog"
import { GeneralDialog } from "../../models/GeneralDialog"

@Component({
  selector: 'app-dialog',
  template: `
    <h1 mat-dialog-title>{{ data.title }}</h1>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>{{ data.cancelAction }}</button>
      <button mat-button [mat-dialog-close]="true">
          {{ data.confirmAction }}
      </button>
    </div>
  `,
  styles: [
  ]
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: GeneralDialog) {
    // data received when dialog is opened
    console.log('open dialog', data);
  }

}
