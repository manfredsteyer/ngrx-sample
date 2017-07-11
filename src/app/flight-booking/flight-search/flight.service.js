"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var app_tokens_1 = require("../../app.tokens");
var FlightService = (function () {
    function FlightService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        console.debug('Liebesgrüße aus dem Konstruktor!');
    }
    FlightService.prototype.find = function (from, to) {
        var url = this.baseUrl + '/flight';
        var search = new http_1.URLSearchParams();
        search.set('from', from);
        search.set('to', to);
        var headers = new http_1.Headers();
        headers.set('Accept', 'application/json');
        return this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); });
    };
    return FlightService;
}());
FlightService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(app_tokens_1.BASE_URL))
], FlightService);
exports.FlightService = FlightService;
