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
var router_1 = require("@angular/router");
var flight_service_1 = require("app/flight-booking/flight-search/flight.service");
var FlightEditComponent = (function () {
    function FlightEditComponent(route, flightService) {
        this.route = route;
        this.flightService = flightService;
    }
    FlightEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.showDetails = params['showDetails'];
            _this.flightService.findById(_this.id).subscribe(function (f) { _this.flight = f; }, function (err) { console.error(err); });
        });
    };
    FlightEditComponent.prototype.save = function () {
        var _this = this;
        this.flightService.save(this.flight).subscribe(function (f) {
            _this.flight = f;
            _this.message = 'Successfully saved!';
        }, function (err) {
            console.error(err);
            _this.message = 'Fehler beim Speichern: ' + err.text();
        });
    };
    return FlightEditComponent;
}());
FlightEditComponent = __decorate([
    core_1.Component({
        selector: 'flight-edit',
        template: "\n    <div class=\"card\" *ngIf=\"flight\">\n      <h1>Flight Edit</h1>\n      <div *ngIf=\"message\">\n        {{ message }}\n      </div>\n      <div class=\"control-group\">\n        <label>Id:</label>\n        <input [(ngModel)]=\"flight.id\" class=\"form-control\">\n      </div>\n      <div class=\"control-group\">\n        <label>From:</label>\n        <input [(ngModel)]=\"flight.from\" class=\"form-control\">\n      </div>\n      <div class=\"control-group\">\n        <label>To:</label>\n        <input [(ngModel)]=\"flight.to\" class=\"form-control\">\n      </div>\n      <div class=\"control-group\">\n        <label>Date:</label>\n        <input [(ngModel)]=\"flight.date\" class=\"form-control\">\n      </div>\n      <div class=\"control-group\">\n        <button class=\"btn btn-default\" (click)=\"save()\">Save</button>\n      </div>\n      \n    </div>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        flight_service_1.FlightService])
], FlightEditComponent);
exports.FlightEditComponent = FlightEditComponent;
//# sourceMappingURL=flight-edit.component.js.map