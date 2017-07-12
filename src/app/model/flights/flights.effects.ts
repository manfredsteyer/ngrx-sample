import { Injectable } from '@angular/core';
import { FlightService } from '../../flight-booking/flight-search/flight.service';
import { Actions, Effect } from '@ngrx/effects';
import { FlightLoadAction, FlightLoadedAction, FLIGHTS_LOAD } from './flights.actions';

@Injectable()
export class FlightEffects {

  constructor(
    private flightService: FlightService,
    private actions$: Actions) {
  }

  @Effect() loadFlights$ =
              this.actions$
                  .ofType(FLIGHTS_LOAD)
                  .switchMap((a: FlightLoadAction) =>
                      this.flightService.find(a.payload.from, a.payload.to))
                  .map(flights => new FlightLoadedAction(flights));

}
