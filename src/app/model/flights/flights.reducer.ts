import { Action, ActionReducer } from '@ngrx/store';
import { FlightState, FlightStatistics } from './flights.state';
import { FLIGHT_STATE_CHANGED, FlightLoadedAction, FLIGHTS_LOADED, FlightStateChangedAction } from './flights.actions';
import { Flight } from '../../entities/flight';

export function flightsReducer(state: FlightState, action: Action): FlightState {
  switch(action.type) {
    case FLIGHTS_LOADED:
      return flightsLoaded(state, action as FlightLoadedAction);
    case FLIGHT_STATE_CHANGED:
      return flightStateChanged(state, action as FlightStateChangedAction);
    default:
      return state;
  }
}

function calcStatistics(payload: Flight[]): FlightStatistics {
  return {
    countDelayed: payload.filter(f => f.delayed).length,
    countInTime: payload.filter(f => !f.delayed).length,
  }
}


function flightStateChanged(state: FlightState, action: FlightStateChangedAction): FlightState {

  let newFlight = action.payload;
  let index = state.flights.findIndex(f => f.id == newFlight.id);

  let newFlights = [
    ...state.flights.slice(0,index),
    newFlight,
    ...state.flights.slice(index+1)
  ];

  return {
    flights: newFlights,
    statistics: calcStatistics(newFlights)
  }

  // Use this return to make ngrx-freeze to throw an error
  // state.flights[index].delayed = newFlight.delayed;
  // return state;
}

function flightsLoaded(state: FlightState, action: FlightLoadedAction): FlightState {
  return {
    flights: action.payload,
    statistics: calcStatistics(action.payload)
  }
}
