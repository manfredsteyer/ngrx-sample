
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight.service';
import { FlightCardComponent } from './flight-search/flight-card.component';
import { FlightBookingRouterModule } from './flight-booking.routes';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightBookingComponent } from './flight-booking.component';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    FlightBookingRouterModule,
    TranslateModule.forChild()
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent,
    FlightBookingComponent
  ],
  providers: [
    FlightService
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule {

}
