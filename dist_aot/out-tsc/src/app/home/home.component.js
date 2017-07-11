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
var auth_service_1 = require("app/shared/auth/auth.service");
var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    Object.defineProperty(HomeComponent.prototype, "userName", {
        get: function () {
            return this.authService.userName;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.login = function () {
        this.authService.login();
    };
    HomeComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: "\n    <h1 *ngIf=\"userName\">Willkommen, {{userName}}</h1>\n    <h1 *ngIf=\"!userName\">Willkommen!</h1>\n    <button class=\"btn btn-default\" (click)=\"login()\">Login</button>\n    <button class=\"btn btn-default\" (click)=\"logout()\">Logout</button>\n  "
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map