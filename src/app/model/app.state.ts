import { FlightState, initialFlightState } from './flights/flights.state';

export interface AppState {
  flights: FlightState;
  otherThings: any; // Only implied
}

export const initialAppState: AppState = {
  flights: initialFlightState,
  otherThings: null
}
