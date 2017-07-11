"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var flight_search_component_1 = require("./flight-search.component");
var flight_booking_module_1 = require("../flight-booking.module");
var http_1 = require("@angular/http");
var app_tokens_1 = require("../../app.tokens");
require("rxjs/add/operator/map");
describe('FlightSearchComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                flight_booking_module_1.FlightBookingModule,
                http_1.HttpModule
            ],
            declarations: [],
            providers: [
                { provide: app_tokens_1.BASE_URL, useValue: 'http://www.angular.at/api' }
            ]
        }).compileComponents();
    }));
    it('should have an undef. selectedFlight initially', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(flight_search_component_1.FlightSearchComponent);
        var comp = fixture.componentInstance;
        // fixture.detectChanges();
        // fixture.nativeElement // DOM des Templates
        // fixture.debugElement // Wrapper für DOM ^
        // fixture.debugElement.queryAll(By.css("button"));
        expect(comp.selectedFlight).toBeUndefined();
    }));
    it('should have no found flights initially', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(flight_search_component_1.FlightSearchComponent);
        var comp = fixture.componentInstance;
        // fixture.detectChanges();
        // fixture.nativeElement // DOM des Templates
        // fixture.debugElement // Wrapper für DOM ^
        // fixture.debugElement.queryAll(By.css("button"));
        expect(comp.flights.length).toBe(0);
    }));
    it('should have no found flights initially', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(flight_search_component_1.FlightSearchComponent);
        var comp = fixture.componentInstance;
        comp.from = '';
        comp.to = '';
        comp.search();
        // Anhalten
    }));
});
