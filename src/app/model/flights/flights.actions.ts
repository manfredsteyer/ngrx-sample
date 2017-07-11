import { Action } from '@ngrx/store';
import { Flight } from '../../entities/flight';
export const FLIGHTS_LOADED = 'FLIGHTS_LOADED';
export const FLIGHT_STATE_CHANGED = 'FLIGHT_STATE_CHANGED';

export class FlightLoadedAction implements Action {
  type = FLIGHTS_LOADED;
  constructor(public payload: Flight[]) { }
}

export class FlightStateChangedAction implements Action {
  type = FLIGHT_STATE_CHANGED;
  constructor(public payload: Flight) { }
}
