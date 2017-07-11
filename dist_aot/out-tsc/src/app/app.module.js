"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_tokens_1 = require("./app.tokens");
// import { FlightBookingModule } from './flight-booking/flight-booking.module';
var event_service_1 = require("./event.service");
var basket_component_1 = require("./basket/basket.component");
var app_routes_1 = require("./app.routes");
var home_component_1 = require("./home/home.component");
var shared_module_1 = require("./shared/shared.module");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var flight_booking_module_1 = require("app/flight-booking/flight-booking.module");
var http_loader_1 = require("@ngx-translate/http-loader");
var core_2 = require("@ngx-translate/core");
function createLoader(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.createLoader = createLoader;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            flight_booking_module_1.FlightBookingModule,
            app_routes_1.AppRouterModule,
            shared_module_1.SharedModule,
            core_2.TranslateModule.forRoot({
                loader: {
                    provide: core_2.TranslateLoader,
                    useFactory: createLoader,
                    deps: [http_1.Http]
                }
            }),
            angular_oauth2_oidc_1.OAuthModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            basket_component_1.BasketComponent,
            home_component_1.HomeComponent
        ],
        providers: [
            // { provide: FlightService, useClass: FlightService }
            // FlightService
            event_service_1.EventService,
            { provide: app_tokens_1.BASE_URL, useValue: 'http://www.angular.at/api' }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map