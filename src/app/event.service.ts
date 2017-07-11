
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { Flight } from './entities/flight';

@Injectable()
export class EventService {
  public flightSelected = new ReplaySubject<Flight>(2);
}
