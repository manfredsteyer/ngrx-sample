import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from './flight.service';
import { Flight } from '../../entities/flight';
import { NgForm } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { AppState } from '../../model/app.state';
import { Store } from '@ngrx/store';
import {
  FlightAddBasketAction, FlightLoadAction, FlightRemoveBasketAction,
  FlightStateChangedAction
} from '../../model/flights/flights.actions';
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
  basket: Observable<object>;

  constructor(
    private flightService: FlightService,
    private store: Store<AppState>) {

    this.flights = this.store.select(f => f.flights.flights);
    this.statistics = this.store.select(f => f.flights.statistics);
    this.basket = this.store.select(f => f.flights.basket);
  }

  changeDelayed(flight: Flight): void {
    let newFlight: Flight = {
      ...flight,
      delayed: !flight.delayed
    };
    this.store.dispatch(new FlightStateChangedAction(newFlight));
  }

  search(): void {
    this.store.dispatch(new FlightLoadAction({from: this.from, to: this.to}));
  }

  toggleBasket(flight: Flight, added: boolean) {
    if (added) {
      this.store.dispatch(new FlightAddBasketAction(flight));
    }
    else {
      this.store.dispatch(new FlightRemoveBasketAction(flight));
    }
  }
}
