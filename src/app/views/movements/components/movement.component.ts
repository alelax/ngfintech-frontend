import { Component, Input, OnInit } from '@angular/core'
import { Movement, MovementType } from "../../../models/movement"

@Component({
  selector: 'app-movement',
  template: `
    <mat-accordion>

      <mat-expansion-panel
        (opened)="panelOpenState = true"
        (closed)="panelOpenState = false"
      >
        <mat-expansion-panel-header>
          <mat-panel-title class="left-content">
            <div class="movement-date">[ {{ date }} ]</div>
            <div class="movement-amount" [ngClass]="type === 'in' ? 'in' : 'out'">€ {{ amount }}</div>
            <div class="movement-title">{{ title }}</div>
          </mat-panel-title>
          <mat-panel-description *ngIf="description" class="center-content">
            {{ description | truncate: 20 }}
          </mat-panel-description>
        </mat-expansion-panel-header>
        <p> {{ description }}</p>
      </mat-expansion-panel>

    </mat-accordion>
  `,
  styles: [`
    .left-content {
      display: flex;
      min-width: 40%;

      .movement-date {
        font-style: italic;
        color: lightgray;
      }
      .movement-amount {
        margin: 0 15px;
        font-weight: bold;
        &.in {
          color: greenyellow;
        }
        &.out {
          color: red;
        }
      }

      .movement-title {
        font-weight: bold;
      }
    }
  `]
})
export class MovementComponent implements OnInit {

  @Input() date: string | number | null = null
  @Input() amount: number | null = null
  @Input() type: MovementType | null = null
  @Input() title: string | null = null
  @Input() description: string | null = null

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
