import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { environment } from "../../environments/environment"
import { Location } from "../models/location"
import { DayWithSlot } from "../models/dayWithSlot"
import { DayWithSlots } from "../models/dayWithSlots"

@Injectable({ providedIn: 'root' })
export class AppointmentsService {

  locations: Location[] = []
  daysList: DayWithSlots[] = []

  constructor(private http: HttpClient) {}

  getLocations(): void {
    this.http.get<Location[]>(environment.apiUrl + '/locations').subscribe( res => this.locations = res);
  }

  getAppointmentSlot(id: string): void {
    this.http.get<DayWithSlots[]>(environment.apiUrl + `/slots/${id}`).subscribe( res => this.daysList = res);
  }

  scheduleAppointment(payload: DayWithSlot): Observable<boolean> {
    return this.http.post<boolean>(environment.apiUrl + '/schedule', payload);
  }


}
