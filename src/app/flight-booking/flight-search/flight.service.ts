
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { BASE_URL } from '../../app.tokens';
import { OAuthService } from 'angular-oauth2-oidc';
import { AppState } from '../../model/app.state';
import { Store } from '@ngrx/store';
import { FlightLoadedAction } from '../../model/flights/flights.actions';

@Injectable()
export class FlightService {

  constructor(
    private http: Http,
    private store: Store<AppState>,
    @Inject(BASE_URL) private baseUrl: string,
    private oauthService: OAuthService) {
  }

  flights: Flight[] = [];

  delay(): void {
    // TODO: ngrx, dispatch action
    const ONE_MINUTE = 1000 * 60;

    if (this.flights.length == 0) return;

    let f = this.flights[0];
    let date = new Date(f.date);
    date.setTime(date.getTime() + 15 * ONE_MINUTE)
    f.date = date.toISOString();

  }

  find(from: string, to: string): Observable<Flight[]> {

    //let url = this.baseUrl + '/secureflight/byRoute';
    let url = this.baseUrl + '/flight';

    let search = new URLSearchParams();
    search.set('from', from);
    search.set('to', to);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    //headers.set('Authorization', this.oauthService.authorizationHeader());

    return this
        .http
        .get(url, {headers, search})
        .map(resp => resp.json());
  }

  findById(id: string): Observable<Flight> {

    //let url = this.baseUrl + '/secureflight/byRoute';
    let url = this.baseUrl + '/flight';

    let search = new URLSearchParams();
    search.set('id', id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    //headers.set('Authorization', this.oauthService.authorizationHeader());

    return this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json());
  }

  save(flight: Flight): Observable<Flight> {

    //let url = this.baseUrl + '/secureflight/byRoute';
    let url = this.baseUrl + '/flight';

    let headers = new Headers();
    headers.set('Accept', 'application/json');
    //headers.set('Authorization', this.oauthService.authorizationHeader());

    return this
            .http
            .post(url, flight, {headers})
            .map(resp => resp.json());
  }

}
