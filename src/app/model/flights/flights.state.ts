import { Flight } from '../../entities/flight';

export interface FlightState {
  flights: Flight[];
  statistics: FlightStatistics;
}

export interface FlightStatistics {
  countDelayed: number;
  countInTime: number;
}

export const initialFlightState: FlightState = {
  flights: [],
  statistics: {
    countDelayed: 0,
    countInTime: 0
  }
};
