import { Action, ActionReducer } from '@ngrx/store';
import { FlightState, FlightStatistics } from './flights.state';
import {
  FLIGHT_ADD_BASKET, FLIGHT_REMOVE_BASKET, FLIGHT_STATE_CHANGED, FlightAddBasketAction, FlightLoadedAction,
  FlightRemoveBasketAction,
  FLIGHTS_LOADED,
  FlightStateChangedAction
} from './flights.actions';
import { Flight } from '../../entities/flight';

export function flightsReducer(state: FlightState, action: Action): FlightState {
  switch(action.type) {
    case FLIGHTS_LOADED:
      return flightsLoaded(state, action as FlightLoadedAction);
    case FLIGHT_STATE_CHANGED:
      return flightStateChanged(state, action as FlightStateChangedAction);
    case FLIGHT_ADD_BASKET:
      return flightAddBasket(state, action as FlightAddBasketAction);
    case FLIGHT_REMOVE_BASKET:
      return flightRemoveBasket(state, action as FlightRemoveBasketAction);
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
    statistics: calcStatistics(newFlights),
    basket: state.basket
  }

  // Use this return to make ngrx-freeze to throw an error
  // state.flights[index].delayed = newFlight.delayed;
  // return state;
}

function flightsLoaded(state: FlightState, action: FlightLoadedAction): FlightState {
  return {
    flights: action.payload,
    statistics: calcStatistics(action.payload),
    basket: state.basket
  }
}

function flightRemoveBasket(state: FlightState, action: FlightRemoveBasketAction) {

  let newBasket = {
    ...state.basket,
    [action.payload.id]: false
  };

  return {
    ...state,
    basket: newBasket
  }
}

function flightAddBasket(state: FlightState, action: FlightAddBasketAction) {
  let newBasket = {
    ...state.basket,
    [action.payload.id]: true
  };

  return {
    ...state,
    basket: newBasket
  }
}
