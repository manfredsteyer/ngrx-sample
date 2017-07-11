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
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
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
            if (event instanceof router_1.NavigationStart) {
                _this.showWaitInfo = true;
            }
            if (event instanceof router_1.NavigationEnd
                || event instanceof router_1.NavigationCancel
                || event instanceof router_1.NavigationError) {
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
    core_1.Component({
        selector: 'flight-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        angular_oauth2_oidc_1.OAuthService,
        core_2.TranslateService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map