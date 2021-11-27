import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Location } from "../../../models/location"

@Component({
  selector: 'app-location-list',
  template: `
    <mat-card>

      <mat-card-title>Sedi</mat-card-title>

      <mat-card-content>

        <mat-selection-list role="list" [multiple]="false">

          <mat-list-option
            role="listitem"
            class="location-list-item"
            *ngFor="let location of locations"
            (click)="openLocationCalendar.emit(location)">
            <!--<span class="location-item-icon">
              <mat-icon>business</mat-icon>
            </span>-->

            <div class="location-item-details">
              <div class="location-item-detail-top">
                <span class="location-name">{{ location.name }}</span>
              </div>
              <div class="location-item-detail-bottom">
                <span class="location-address">{{ location.address }}</span>
              </div>
            </div>

          </mat-list-option>

        </mat-selection-list>

      </mat-card-content>

    </mat-card>
  `,
  styles: [`
    .location-list-item {
      width: 100%;
      display: flex;
      align-items: center;

      & .location-item-details {
        flex-grow: 3;
        padding: 0 20px;

        & .location-name {
          font-size: 14px;
        }

        & .location-address {
          font-weight: bold;
        }

      }

      & .location-item-icon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
    }
  `]
})
export class LocationListComponent implements OnInit {

  @Input() locations: Location[] | null = null
  @Output() openLocationCalendar = new EventEmitter<Location>()

  old_locations: Location[] = [
    {
      _id: "708f65e2-422d-11ec-81d3-0242ac130003",
      name: "Sede di Treia",
      address: "Via Leopardi, 84",
      phone: "0733 216754",
      email: "bt@btreia.it",
      coords: [43.31070924298268, 13.313056100502445]
    },
    {
      _id: "b6e48432-422d-11ec-81d3-0242ac130003",
      name: "Sede di Macerata",
      address: "Via dei Velini, 123",
      phone: "0733 236499",
      email: "bt@bmacerata.it",
      coords: [43.29778363052106, 13.453327740030513]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
