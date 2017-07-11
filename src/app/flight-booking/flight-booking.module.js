"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var flight_search_component_1 = require("./flight-search/flight-search.component");
var flight_card_component_1 = require("./flight-search/flight-card.component");
var reactive_flight_search_component_1 = require("./reactive-flight-search/reactive-flight-search.component");
var FlightBookingModule = (function () {
    function FlightBookingModule() {
    }
    return FlightBookingModule;
}());
FlightBookingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            shared_module_1.SharedModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            reactive_flight_search_component_1.ReactiveFlightSearchComponent,
            flight_search_component_1.FlightSearchComponent,
            flight_card_component_1.FlightCardComponent
        ],
        providers: [],
        exports: [
            reactive_flight_search_component_1.ReactiveFlightSearchComponent,
            flight_search_component_1.FlightSearchComponent
        ]
    })
], FlightBookingModule);
exports.FlightBookingModule = FlightBookingModule;
