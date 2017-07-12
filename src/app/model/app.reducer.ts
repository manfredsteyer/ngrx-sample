import { flightsReducer } from './flights/flights.reducer';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';

const mainReducer = {
  flights: flightsReducer
}

const prodReducer = combineReducers(mainReducer);
const debugReducer = storeFreeze(combineReducers(mainReducer));
export const appReducer = (environment.production) ? prodReducer : debugReducer;
