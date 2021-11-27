import { Component, OnInit, ViewChild } from '@angular/core'
import { Location } from "../../models/location"
import { MatDrawer } from "@angular/material/sidenav"
import { MatSnackBar } from "@angular/material/snack-bar"
import { DayWithSlot } from "../../models/dayWithSlot"

@Component({
  selector: 'app-appointments',
  template: `
    <mat-drawer-container>

      <mat-drawer #drawer position="end" mode="side">
        <app-location-contact
          (bookSlot)="confirmMeeting($event)"
          (cancel)="cancel()"
          [location]="locationSelected"
        ></app-location-contact>
      </mat-drawer>

      <mat-drawer-content>
        <app-location-list
          [locations]="locations"
          (openLocationCalendar)="openCalendar($event)"
        ></app-location-list>
      </mat-drawer-content>

    </mat-drawer-container>


  `,
  styles: [`
    mat-drawer-container {
      min-height: 100vh;

      & mat-drawer, & mat-drawer-content {
        height: fit-content;
      }
    }
  `]
})
export class AppointmentsComponent implements OnInit {

  @ViewChild('drawer') drawer!: MatDrawer;
  locations: Location[] = [
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
  locationSelected: Location | null = null

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  private closeDrawer() {
    this.drawer.close().then()
  }

  cancel() { this.closeDrawer() }

  confirmMeeting(meetingDate: DayWithSlot | null) {
    console.log('APPUNTAMENTO CONFERMATO: ', meetingDate)
    this.closeDrawer()
  }

  openCalendar(location: Location) {
    this.locationSelected = location
    this.drawer.open().then()
  }
}
