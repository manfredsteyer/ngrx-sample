webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_flight_booking_flight_search_flight_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-edit',
        template: "\n    <div class=\"card\" *ngIf=\"flight\">\n      <h1>Flight Edit</h1>\n      <div *ngIf=\"message\">\n        {{ message }}\n      </div>\n      <div class=\"control-group\">\n        <label>Id:</label>\n        <input [(ngModel)]=\"flight.id\" class=\"form-control\">\n      </div>\n      <div class=\"control-group\">\n        <label>From:</label>\n        <input [(ngModel)]=\"flight.from\" class=\"form-control\">\n      </div>\n      <div class=\"control-group\">\n        <label>To:</label>\n        <input [(ngModel)]=\"flight.to\" class=\"form-control\">\n      </div>\n      <div class=\"control-group\">\n        <label>Date:</label>\n        <input [(ngModel)]=\"flight.date\" class=\"form-control\">\n      </div>\n      <div class=\"control-group\">\n        <button class=\"btn btn-default\" (click)=\"save()\">Save</button>\n      </div>\n      \n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_flight_booking_flight_search_flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_flight_booking_flight_search_flight_service__["a" /* FlightService */]) === "function" && _b || Object])
], FlightEditComponent);

var _a, _b;
//# sourceMappingURL=flight-edit.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flight_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-search',
        template: __webpack_require__(257),
        styles: [__webpack_require__(247)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__flight_service__["a" /* FlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__flight_service__["a" /* FlightService */]) === "function" && _a || Object])
], FlightSearchComponent);

var _a;
//# sourceMappingURL=flight-search.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_auth_auth_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PassengerSearchComponent = (function () {
    function PassengerSearchComponent(authService) {
        this.authService = authService;
    }
    Object.defineProperty(PassengerSearchComponent.prototype, "userName", {
        get: function () {
            return this.authService.userName;
        },
        enumerable: true,
        configurable: true
    });
    return PassengerSearchComponent;
}());
PassengerSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'passenger-search',
        template: "\n    <div class=\"row\">\n    <div class=\"card\">\n        <h1>Passenger Search</h1>\n      <div class=\"form-group\">\n        <label>Name:</label>\n        <input [(ngModel)]=\"userName\" class=\"form-control\">\n      </div>\n      <div>\n        This is just a dummy form ...\n      </div>\n    </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], PassengerSearchComponent);

var _a;
//# sourceMappingURL=passenger-search.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_auth_auth_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: "\n    <h1 *ngIf=\"userName\">Willkommen, {{userName}}</h1>\n    <h1 *ngIf=\"!userName\">Willkommen!</h1>\n    <button class=\"btn btn-default\" (click)=\"login()\">Login</button>\n    <button class=\"btn btn-default\" (click)=\"logout()\">Logout</button>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_city_pipe__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_auth_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_tools_delay_resolver__ = __webpack_require__(184);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pipes_city_pipe__["a" /* CityPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4_app_shared_tools_delay_resolver__["a" /* DelayResolver */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_auth_auth_service__["a" /* AuthService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__pipes_city_pipe__["a" /* CityPipe */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 169;


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, oauthService, translateService) {
        this.router = router;
        this.oauthService = oauthService;
        this.translateService = translateService;
        // this.initAuth();
        this.initRouterEvents();
        this.initI18N();
    }
    AppComponent.prototype.initRouterEvents = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            console.debug('router-event', event);
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationStart */]) {
                _this.showWaitInfo = true;
            }
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]
                || event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationCancel */]
                || event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationError */]) {
                _this.showWaitInfo = false;
            }
        });
    };
    AppComponent.prototype.initI18N = function () {
        this.translateService.addLangs(['en', 'de']);
        this.translateService.setDefaultLang('de');
        this.translateService.use('de');
    };
    AppComponent.prototype.initAuth = function () {
        var _this = this;
        // URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = window.location.origin + "/index.html";
        // The SPA's id. The SPA is registerd with this id at the auth-server
        this.oauthService.clientId = "spa-demo";
        // set the scope for the permissions the client should request
        // The first three are defined by OIDC. The 4th is a usecase-specific one
        this.oauthService.scope = "openid profile email voucher";
        // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
        // OAuth2-based access_token
        this.oauthService.oidc = true;
        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
        // instead of localStorage
        this.oauthService.setStorage(sessionStorage);
        // The name of the auth-server that has to be mentioned within the token
        this.oauthService.issuer = "https://steyer-identity-server.azurewebsites.net/identity";
        // Load Discovery Document and then try to login the user
        this.oauthService.loadDiscoveryDocument().then(function () {
            // This method just tries to parse the token(s) within the url when
            // the auth-server redirects the user back to the web-app
            // It dosn't send the user the the login page
            _this.oauthService.tryLogin({});
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-app',
        template: __webpack_require__(253),
        styles: [__webpack_require__(245)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_tokens__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basket_basket_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_oauth2_oidc__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_flight_booking_flight_booking_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__(65);
/* unused harmony export createLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { FlightBookingModule } from './flight-booking/flight-booking.module';









function createLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_12_app_flight_booking_flight_booking_module__["a" /* FlightBookingModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* AppRouterModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: createLoader,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_11_angular_oauth2_oidc__["OAuthModule"].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__basket_basket_component__["a" /* BasketComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */]
        ],
        providers: [
            // { provide: FlightService, useClass: FlightService }
            // FlightService
            __WEBPACK_IMPORTED_MODULE_6__event_service__["a" /* EventService */],
            { provide: __WEBPACK_IMPORTED_MODULE_5__app_tokens__["a" /* BASE_URL */], useValue: 'http://www.angular.at/api' }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basket_basket_component__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });



var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    /*
    {
      path: 'flight-booking',
      loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
    },
    */
    {
        path: 'basket',
        component: __WEBPACK_IMPORTED_MODULE_2__basket_basket_component__["a" /* BasketComponent */],
        outlet: 'aux'
    },
    /*
    */
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* RouterModule */].forRoot(APP_ROUTES, {
    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["g" /* PreloadAllModules */]
});
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

//# sourceMappingURL=flight.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flight_search_flight_search_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flight_search_flight_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flight_search_flight_card_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flight_booking_routes__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__passenger_search_passenger_search_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__flight_edit_flight_edit_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__flight_booking_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightBookingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var FlightBookingModule = (function () {
    function FlightBookingModule() {
    }
    return FlightBookingModule;
}());
FlightBookingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__flight_booking_routes__["a" /* FlightBookingRouterModule */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__flight_search_flight_search_component__["a" /* FlightSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__flight_search_flight_card_component__["a" /* FlightCardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__passenger_search_passenger_search_component__["a" /* PassengerSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_9__flight_edit_flight_edit_component__["a" /* FlightEditComponent */],
            __WEBPACK_IMPORTED_MODULE_10__flight_booking_component__["a" /* FlightBookingComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__flight_search_flight_service__["a" /* FlightService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__flight_search_flight_search_component__["a" /* FlightSearchComponent */]
        ]
    })
], FlightBookingModule);

//# sourceMappingURL=flight-booking.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_search_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passenger_search_passenger_search_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flight_edit_flight_edit_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flight_booking_component__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightBookingRouterModule; });





var FLIGHT_BOOKING_ROUTES = [
    {
        path: 'flight-booking',
        component: __WEBPACK_IMPORTED_MODULE_4__flight_booking_component__["a" /* FlightBookingComponent */],
        children: [
            {
                path: '',
                redirectTo: 'flight-search',
                pathMatch: 'full'
            },
            {
                path: 'flight-search',
                component: __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_search_component__["a" /* FlightSearchComponent */]
            },
            {
                path: 'flight-edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_3__flight_edit_flight_edit_component__["a" /* FlightEditComponent */]
            },
            {
                path: 'passenger-search',
                component: __WEBPACK_IMPORTED_MODULE_2__passenger_search_passenger_search_component__["a" /* PassengerSearchComponent */]
            }
        ]
    },
];
var FlightBookingRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* RouterModule */].forChild(FLIGHT_BOOKING_ROUTES);
//# sourceMappingURL=flight-booking.routes.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_flight__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_flight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__entities_flight__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlightCardComponent = (function () {
    function FlightCardComponent(element, zone) {
        this.element = element;
        this.zone = zone;
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FlightCardComponent.prototype.select = function () {
        this.selected = true;
        this.selectedChange.next(/* $event= */ this.selected);
    };
    FlightCardComponent.prototype.deselect = function () {
        this.selected = false;
        this.selectedChange.next(this.selected);
    };
    FlightCardComponent.prototype.blink = function () {
        var _this = this;
        // Dirty Hack used to visualize the change detector
        // let originalColor = this.element.nativeElement.firstChild.style.backgroundColor;
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
            }, 1000);
        });
        return null;
    };
    return FlightCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__entities_flight__["Flight"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__entities_flight__["Flight"]) === "function" && _a || Object)
], FlightCardComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FlightCardComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FlightCardComponent.prototype, "selectedChange", void 0);
FlightCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-card',
        template: __webpack_require__(256)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object])
], FlightCardComponent);

var _a, _b, _c;
//# sourceMappingURL=flight-card.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CityPipe = (function () {
    function CityPipe() {
    }
    CityPipe.prototype.transform = function (value, fmt, lang) {
        var long, short;
        switch (value) {
            case 'Hamburg':
                long = 'Airport Hamburg Fulsbüttel - Helmut Schmidt';
                short = 'HAM';
                break;
            case 'Graz':
                long = 'Flughafen Graz Thalerhof';
                short = 'GRZ';
                break;
            case 'Stuttgart':
                long = 'Aiport Stuttgart - Manfred Rommel';
                short = 'STR';
                break;
            default:
                long = short = 'ROM';
        }
        if (fmt === 'short')
            return short;
        return long;
    };
    return CityPipe;
}());
CityPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'city',
        pure: true
    })
], CityPipe);

//# sourceMappingURL=city.pipe.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelayResolver; });

var DelayResolver = (function () {
    function DelayResolver() {
    }
    DelayResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null).delay(5000);
    };
    return DelayResolver;
}());

//# sourceMappingURL=delay.resolver.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, ".loading-indicator {\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: black;\r\n    opacity: 0.3;\r\n}\r\n\r\n.spinner {\r\n    width: 40px;\r\n    height: 40px;\r\n\r\n    position: relative;\r\n    margin: 100px auto;\r\n}\r\n\r\n.double-bounce1, .double-bounce2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: #FFF;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n}\r\n\r\n.double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n}\r\n\r\n@-webkit-keyframes sk-bounce {\r\n    0%, 100% { -webkit-transform: scale(0.0) }\r\n    50% { -webkit-transform: scale(1.0) }\r\n}\r\n\r\n@keyframes sk-bounce {\r\n    0%, 100% {\r\n        transform: scale(0.0);\r\n        -webkit-transform: scale(0.0);\r\n    } 50% {\r\n          transform: scale(1.0);\r\n          -webkit-transform: scale(1.0);\r\n      }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, ".gray-bg {\r\n    opacity: 0.4;\r\n    background-color: black;\r\n    left:0px;\r\n    top:0px;\r\n    width:100%;\r\n    height:100%;\r\n    position: fixed;\r\n}\r\n\r\n.flight-history {\r\n    left:0px;\r\n    top:0px;\r\n    width:100%;\r\n    height:100%;\r\n    position: fixed;\r\n}\r\n\r\n.flight-history-inside {\r\n    background-color: white;\r\n    margin: 100px auto;\r\n    width: 400px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "input.ng-invalid {\r\n  border-left: 5px solid chocolate;\r\n}\r\n\r\ninput.ng-valid {\r\n  border-left: 5px solid cadetblue;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"#\">Holiday42</a>\n  </div>\n\n  <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"home\">Home</a></li>\n    <li><a routerLink=\"flight-booking/flight-search\">Flight Booking</a></li>\n\n    <li><a [routerLink]=\"[{ outlets: { 'aux': 'basket' }}]\">Show Basket</a></li>\n    <li><a [routerLink]=\"[{ outlets: { 'aux': null }}]\">Hide Basket</a></li>\n\n  </ul>\n</nav>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n<!-- 2nd outlet -->\n<router-outlet name=\"aux\"></router-outlet>\n\n<div class=\"loading-indicator\" *ngIf=\"showWaitInfo\">\n    <div class=\"spinner\">\n        <div class=\"double-bounce1\"></div>\n        <div class=\"double-bounce2\"></div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<div class=\"gray-bg\"></div>\r\n\r\n<div class=\"flight-history\">\r\n\r\n  <div class=\"flight-history-inside card\">\r\n\r\n    <h2>Your Basket [<a (click)=\"close()\">x</a>]</h2>\r\n\r\n    <ul class=\"list-group\">\r\n\r\n      <li class=\"list-group-item\" *ngIf=\"flights.length == 0\">\r\n        Your basket is empty!\r\n      </li>\r\n\r\n      <li class=\"list-group-item\" *ngFor=\"let f of flights\">\r\n        <p>\r\n          Id: {{f.id}}, {{f.from}} - {{f.to}}\r\n        </p>\r\n        <p>\r\n          {{f.date | date: 'dd.MM.yyyy HH:mm'}}\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-sm-2\">\r\n  <div class=\"card card-contensed\">\r\n  <ul class=\"nav nav-pills nav-stacked\" style=\"margin-top:20px;\">\r\n    <li><a [routerLink]=\"['./flight-search']\">Flug auswählen</a></li>\r\n    <li><a [routerLink]=\"['./passenger-search']\">Passagier auswählen</a></li>\r\n  </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-sm-10\">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\"\r\n     [ngStyle]=\"{'background-color': (selected) ?  'orange' : 'white' }\">\r\n\r\n  <h2>{{item.from}} - {{item.to}}</h2>\r\n  <p>Flugnr. #{{item.id}}</p>\r\n  <p>Datum: {{item.date | date:'dd.MM.yyyy HH:mm'}}</p>\r\n\r\n  <p>\r\n    <button class=\"btn btn-default\" *ngIf=\"!selected\" (click)=\"select()\">Auswählen</button>\r\n    <button class=\"btn btn-default\" *ngIf=\"selected\" (click)=\"deselect()\">Entfernen</button>\r\n    <a class=\"btn btn-default\" [routerLink]=\"['../flight-edit', item.id, {showDetails: true}]\">Edit</a>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"card\">\r\n\r\n  <h1>Flight Search</h1>\r\n\r\n  <form #f=\"ngForm\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"from\">From:</label>\r\n    <input\r\n      [(ngModel)]=\"from\"\r\n      name=\"from\"\r\n      minlength=\"3\"\r\n      maxlength=\"30\"\r\n      pattern=\"[A-Za-zöäüßÖÄÜ]*\"\r\n      id=\"from\"\r\n      class=\"form-control\">\r\n\r\n    <div *ngIf=\"!f?.controls['from']?.valid && f?.controls['from']?.dirty\">\r\n      ... Fehler ...\r\n    </div>\r\n\r\n    <div *ngIf=\"f?.controls['from']?.hasError('minlength')\">\r\n      ... min ...\r\n    </div>\r\n\r\n    <div *ngIf=\"f?.controls['from']?.hasError('maxlength')\">\r\n      ... maxlength ...\r\n    </div>\r\n\r\n    <div *ngIf=\"f?.controls['from']?.hasError('pattern')\">\r\n      ... pattern ...\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>To:</label>\r\n    <input\r\n      name=\"to\"\r\n      [(ngModel)]=\"to\"\r\n      class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <button (click)=\"search(f)\" class=\"btn btn-default\">Search</button>\r\n\r\n    <button *ngIf=\"flights.length > 0\" (click)=\"delay()\" class=\"btn btn-default\">Delay</button>\r\n  </div>\r\n  </form>\r\n</div>\r\n</div>\r\n\r\n\r\n<!--\r\n<div class=\"card\" *ngIf=\"flights.length > 0\">\r\n\r\n  <table class=\"table table-condensed\">\r\n    <tr *ngFor=\"let flight of flights\" [ngClass]=\"{ 'active': flight == selectedFlight }\">\r\n      <td>{{flight.id}}</td>\r\n      <td>{{flight.from | city:'short'}}</td>\r\n      <td>{{flight.to | city:'long'}}</td>\r\n      <td>{{flight.date | date:'dd.MM.yyyy HH:mm'}}</td>\r\n      <td><a (click)=\"select(flight)\">Select</a></td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n-->\r\n<div class=\"row\">\r\n<div *ngFor=\"let f of flights\" class=\"col col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n  <flight-card\r\n    [item]=\"f\"\r\n    [(selected)]=\"basket[f.id]\"></flight-card>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"card\">\r\n    <h2>Basket</h2>\r\n    <pre>{{ basket | json }}</pre>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_tokens__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightService; });
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
        var search = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["URLSearchParams"]();
        search.set('from', from);
        search.set('to', to);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
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
        var search = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["URLSearchParams"]();
        search.set('id', id);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
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
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__app_tokens__["a" /* BASE_URL */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__["OAuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__["OAuthService"]) === "function" && _b || Object])
], FlightService);

var _a, _b;
//# sourceMappingURL=flight.service.js.map

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(170);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthService = (function () {
    function AuthService() {
        this.userName = null;
    }
    AuthService.prototype.login = function () {
        this.userName = 'Max';
    };
    AuthService.prototype.logout = function () {
        this.userName = null;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_URL; });

var BASE_URL = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('BASE_URL');
//# sourceMappingURL=app.tokens.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasketComponent = (function () {
    function BasketComponent(eventService, router) {
        var _this = this;
        this.eventService = eventService;
        this.router = router;
        this.flights = [];
        eventService.flightSelected.subscribe(function (flight) {
            if (!flight)
                return;
            _this.flights.push(flight);
            if (_this.flights.length > 3) {
                _this.flights = _this.flights.slice(1);
            }
        });
    }
    BasketComponent.prototype.close = function () {
        this.router.navigate([{ outlets: { aux: null } }]);
    };
    return BasketComponent;
}());
BasketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'basket',
        template: __webpack_require__(254),
        styles: [__webpack_require__(246)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], BasketComponent);

var _a, _b;
//# sourceMappingURL=basket.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EventService = (function () {
    function EventService() {
        this.flightSelected = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"](2);
    }
    return EventService;
}());
EventService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EventService);

//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flight_search_flight_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightBookingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FlightBookingComponent = (function () {
    function FlightBookingComponent() {
    }
    return FlightBookingComponent;
}());
FlightBookingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flight-booking',
        template: __webpack_require__(255),
        providers: [__WEBPACK_IMPORTED_MODULE_1__flight_search_flight_service__["a" /* FlightService */]]
    })
], FlightBookingComponent);

//# sourceMappingURL=flight-booking.component.js.map

/***/ })

},[521]);
//# sourceMappingURL=main.bundle.js.map