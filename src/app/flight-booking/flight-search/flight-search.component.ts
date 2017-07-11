import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from './flight.service';
import { Flight } from '../../entities/flight';
import { NgForm } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { AppState } from '../../model/app.state';
import { Store } from '@ngrx/store';
import { FlightStateChangedAction } from '../../model/flights/flights.actions';
import { FlightStatistics } from '../../model/flights/flights.state';

@Component({
  selector: 'flight-search',
  templateUrl: 'flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

  from: string;
  to: string;
  selectedFlight: Flight;

  flights: Observable<Flight[]>;
  statistics: Observable<FlightStatistics>;

  // todo: ngrx, move to store
  basket: any = {
    "3": true,
    "4": false,
    "5": true
  };

  constructor(
    private flightService: FlightService,
    private store: Store<AppState>) {

    this.flights = this.store.select(f => f.flights.flights);
    this.statistics = this.store.select(f => f.flights.statistics);
  }

  changeDelayed(flight: Flight): void {
    let newFlight: Flight = {
      ...flight,
      delayed: !flight.delayed
    };
    this.store.dispatch(new FlightStateChangedAction(newFlight));
  }

  search(): void {
      // todo: ngrx, trigger effects
      this.flightService.find(this.from, this.to);
  }

  // todo: ngrx, dispatch action
  delay(): void {
    this.flightService.delay();
  }

}
