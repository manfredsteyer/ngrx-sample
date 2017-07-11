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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var app_tokens_1 = require("../../app.tokens");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var FlightService = (function () {
    function FlightService(http, baseUrl, oauthService) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.oauthService = oauthService;
        this.flights = [];
    }
    FlightService.prototype.delay = function () {
        var ONE_MINUTE = 1000 * 60;
        if (this.flights.length == 0)
            return;
        var f = this.flights[0];
        var date = new Date(f.date);
        date.setTime(date.getTime() + 15 * ONE_MINUTE);
        f.date = date.toISOString();
    };
    FlightService.prototype.find = function (from, to) {
        var _this = this;
        //let url = this.baseUrl + '/secureflight/byRoute';
        var url = this.baseUrl + '/flight';
        var search = new http_1.URLSearchParams();
        search.set('from', from);
        search.set('to', to);
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        //headers.set('Authorization', this.oauthService.authorizationHeader());
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (flights) {
            _this.flights = flights;
        }, function (err) {
            console.error(err);
        });
    };
    FlightService.prototype.findById = function (id) {
        //let url = this.baseUrl + '/secureflight/byRoute';
        var url = this.baseUrl + '/flight';
        var search = new http_1.URLSearchParams();
        search.set('id', id);
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        //headers.set('Authorization', this.oauthService.authorizationHeader());
        return this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); });
    };
    FlightService.prototype.save = function (flight) {
        //let url = this.baseUrl + '/secureflight/byRoute';
        var url = this.baseUrl + '/flight';
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        //headers.set('Authorization', this.oauthService.authorizationHeader());
        return this
            .http
            .post(url, flight, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    return FlightService;
}());
FlightService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_tokens_1.BASE_URL)),
    __metadata("design:paramtypes", [http_1.Http, String, angular_oauth2_oidc_1.OAuthService])
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map