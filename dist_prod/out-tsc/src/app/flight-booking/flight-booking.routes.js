"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var flight_search_component_1 = require("./flight-search/flight-search.component");
var passenger_search_component_1 = require("./passenger-search/passenger-search.component");
var flight_edit_component_1 = require("./flight-edit/flight-edit.component");
var flight_booking_component_1 = require("./flight-booking.component");
var FLIGHT_BOOKING_ROUTES = [
    {
        path: 'flight-booking',
        component: flight_booking_component_1.FlightBookingComponent,
        children: [
            {
                path: '',
                redirectTo: 'flight-search',
                pathMatch: 'full'
            },
            {
                path: 'flight-search',
                component: flight_search_component_1.FlightSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: flight_edit_component_1.FlightEditComponent
            },
            {
                path: 'passenger-search',
                component: passenger_search_component_1.PassengerSearchComponent
            }
        ]
    },
];
exports.FlightBookingRouterModule = router_1.RouterModule.forChild(FLIGHT_BOOKING_ROUTES);
//# sourceMappingURL=flight-booking.routes.js.map