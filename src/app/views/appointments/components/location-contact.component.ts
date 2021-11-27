import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormControl, NgForm } from "@angular/forms"
import { DayWithSlots } from "../../../models/dayWithSlots"
import * as moment from 'moment';
import { Moment } from "moment"
import { Slots } from "../../../models/slots"
import { DayWithSlot } from "../../../models/dayWithSlot"
import { MatDialog } from "@angular/material/dialog"
import { DialogComponent } from "../../dialog/dialog.component"
import { Location } from "../../../models/location"

@Component({
  selector: 'app-location-contact',
  template: `
    <mat-card>
      <mat-card-content>

        <div>
          <app-location-map
            *ngIf="location"
            [locationName]="location.name"
            [coords]="location.coords"
            [zoom]="10"
          ></app-location-map>
        </div>

        <mat-form-field appearance="fill">
          <mat-label>Scegli una data</mat-label>
          <input
            matInput
            [matDatepicker]="picker"
            [matDatepickerFilter]="availableDateFilter"
            [formControl]="meetingDate"
          >
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>

        <mat-selection-list role="list" *ngIf="meetingDate.value" [multiple]="false">

          <mat-list-option
            role="listitem"
            class="slot-list-item"
            *ngFor="let slot of getSlotByDate(meetingDate.value, daysList)"
            (click)="confirmMeetingDate({day: meetingDate.value, slot})"
            [value]="slot"
          >
            <!--<div class="slot-item-icon">
              <mat-icon>schedule</mat-icon>
            </div>-->
            <div class="slot-item-details">
              <div class="slot-item-detail-top">
                <mat-icon>schedule</mat-icon>
                <span class="slot-name">
                  {{ slot }}
                </span>
              </div>
            </div>

          </mat-list-option>

        </mat-selection-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      width: 500px;
    }

    mat-form-field {
      margin: 25px 0;
    }
    .slot-list-item {
      width: 100%;
      display: flex;
      align-items: center;

      & .slot-item-details {
        flex-grow: 3;
        padding: 0 5px;

        & .slot-item-detail-top {

          display: flex;
          align-items: center;

          & .slot-name {
            font-size: 14px;
            margin-left: 10px;
          }
        }

      }

      & .slot-item-icon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
    }
  `]
})

export class LocationContactComponent {

  @Input() location: Location | null = null
  @Output() bookSlot = new EventEmitter<DayWithSlot | null>()
  @Output() cancel = new EventEmitter<void>()

  meetingDate = new FormControl(null);
  daysList: DayWithSlots[] = this.generateDaysWithSlots(15).daysWithSlots
  availableDaysList: Array<Moment> = this.generateDaysWithSlots(15).daysList

  constructor(private dialog: MatDialog) {}

  ngOnChanges() {console.log('location: ', this.location)}

  confirmMeetingDate(dayWithSlot: DayWithSlot) {
    const day = moment(dayWithSlot.day).format('DD/MM/YYYY')
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: {
        title: 'Confermi l\'appuntamento?',
        message: `L'appuntamento sarà fissato per il giorno ${day} alle ${dayWithSlot.slot}`,
        cancelAction: 'Annulla',
        confirmAction: 'Conferma'
      },
    });

    dialogRef.afterClosed().subscribe((isMeetingConfirmed: boolean) => {
      this.bookSlot.emit( isMeetingConfirmed ? { day, slot: dayWithSlot.slot } : null)
      this.meetingDate.setValue(null)

    });

  }

  generateDaysWithSlots(howManyDays: number): { daysWithSlots: DayWithSlots[], daysList: Array<Moment> } {
    let daysWithSlots: DayWithSlots[] = []

    let i = 0
    while (daysWithSlots.length < howManyDays) {

      const baseDate = moment().add(i, (i === 0 || i === 1) ? 'day' : 'days')

      // Considero il giorno se non è un giorno festivo ( sabato [6], domenica [0]
      if (baseDate.weekday() !== 6 && baseDate.weekday() !== 0) {
        const day = baseDate.format('YYYY-MM-DD')
        daysWithSlots.push({ day, slots: this.getRandomDailySlots(1, 24) })
      }

      i++

    }

    return { daysWithSlots, daysList: daysWithSlots.map( d => moment(d.day) ) }

  }

  getRandomDailySlots(min: number, max: number): Slots[] {
    const slot: Slots[] = []
    while(slot.length < 5){
      const randomHour: Slots = Math.floor(Math.random() * (max - min) + min) as Slots;
      if(slot.indexOf(randomHour) === -1) slot.push(randomHour);
    }
    return slot.sort( (a, b) => a - b )
  }

  getSlotByDate(selectedDate: string, daysList: DayWithSlots[]): Slots[] {
    return (daysList.find( d => d.day === moment(selectedDate).format('YYYY-MM-DD')))?.slots || []
  }

  availableDateFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    const startDay = moment.min(this.availableDaysList)
    const endDay = moment.max(this.availableDaysList)

    return (
      day.getDay() !== 0 &&
      day.getDay() !== 6 &&
      moment(day).isBetween(startDay, endDay, "day", '[]')
    )
  };

}
