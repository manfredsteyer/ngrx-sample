import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { BASE_URL } from './app.tokens';
import { CityPipe } from './shared/pipes/city.pipe';
// import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { EventService } from './event.service';
import { BasketComponent } from './basket/basket.component';
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FlightBookingModule } from "app/flight-booking/flight-booking.module";

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './model/app.reducer';
import { initialAppState } from './model/app.state';
import { FlightEffects } from './model/flights/flights.effects';
import { RouterStoreModule } from '@ngrx/router-store';

export function createLoader(http: Http) {
    return new TranslateHttpLoader (http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlightBookingModule,
    AppRouterModule,
    SharedModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createLoader,
            deps: [Http]
        }
    }),
    OAuthModule.forRoot(),
    StoreModule.provideStore(appReducer, initialAppState),
    RouterStoreModule.connectRouter(),
    EffectsModule.run(FlightEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [
    AppComponent,
    BasketComponent,
    HomeComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    // FlightService
    EventService,
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
