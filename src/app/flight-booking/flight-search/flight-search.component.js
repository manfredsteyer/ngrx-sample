"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var flight_service_1 = require("./flight.service");
var FlightSearchComponent = (function () {
    //private http: Http;
    function FlightSearchComponent(flightService) {
        this.flightService = flightService;
        this.flights = [];
        this.basket = {
            "3": true,
            "4": false,
            "5": true
        };
        // this.http = http;
    }
    FlightSearchComponent.prototype.search = function () {
        var _this = this;
        this.flightService
            .find(this.from, this.to)
            .subscribe(function (flights) {
            _this.flights = flights;
        }, function (errResp) {
            console.error('Fehler beim Laden', errResp);
        });
    };
    FlightSearchComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    return FlightSearchComponent;
}());
__decorate([
    core_1.ViewChild('f')
], FlightSearchComponent.prototype, "form", void 0);
FlightSearchComponent = __decorate([
    core_1.Component({
        selector: 'flight-search',
        templateUrl: 'flight-search.component.html',
        styleUrls: ['./flight-search.component.css'],
        providers: [flight_service_1.FlightService]
    })
], FlightSearchComponent);
exports.FlightSearchComponent = FlightSearchComponent;
