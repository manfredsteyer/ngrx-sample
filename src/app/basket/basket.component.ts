import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Flight } from '../entities/flight';
import { Router } from "@angular/router";
@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  flights: Array<Flight> = [];

  constructor(
    private eventService: EventService, 
    private router: Router) {

    eventService.flightSelected.subscribe(
      flight => {
        if (!flight) return;
        this.flights.push(flight);
        if (this.flights.length > 3) {
          this.flights = this.flights.slice(1);
        }
      }
    )
  }

  close() {
    this.router.navigate([{outlets: {aux: null}}]);
  }

}
