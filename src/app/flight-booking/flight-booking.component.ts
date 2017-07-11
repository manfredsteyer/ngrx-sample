import { Component } from '@angular/core';
import { FlightService } from './flight-search/flight.service';
@Component({
  selector: 'flight-booking',
  templateUrl: './flight-booking.component.html',
  providers: [FlightService]
})
export class FlightBookingComponent {
}
