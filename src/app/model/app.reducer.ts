import { flightsReducer } from './flights/flights.reducer';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';

const mainReducer = {
  flights: flightsReducer,
  router: routerReducer
}

const prodReducer = combineReducers(mainReducer);
const debugReducer = storeFreeze(combineReducers(mainReducer));
export const appReducer = (environment.production) ? prodReducer : debugReducer;
