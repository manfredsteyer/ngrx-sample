"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var flight_service_1 = require("./flight.service");
var FlightSearchComponent = (function () {
    //private http: Http;
    function FlightSearchComponent(flightService) {
        this.flightService = flightService;
        this.basket = {
            "3": true,
            "4": false,
            "5": true
        };
        // this.http = http;
    }
    Object.defineProperty(FlightSearchComponent.prototype, "flights", {
        // flights --> flights()
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchComponent.prototype.search = function () {
        this.flightService.find(this.from, this.to);
    };
    FlightSearchComponent.prototype.delay = function () {
        this.flightService.delay();
    };
    FlightSearchComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    return FlightSearchComponent;
}());
FlightSearchComponent = __decorate([
    core_1.Component({
        selector: 'flight-search',
        templateUrl: 'flight-search.component.html',
        styleUrls: ['./flight-search.component.css']
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], FlightSearchComponent);
exports.FlightSearchComponent = FlightSearchComponent;
//# sourceMappingURL=flight-search.component.js.map