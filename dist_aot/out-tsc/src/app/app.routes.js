"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var basket_component_1 = require("./basket/basket.component");
var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    /*
    {
      path: 'flight-booking',
      loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
    },
    */
    {
        path: 'basket',
        component: basket_component_1.BasketComponent,
        outlet: 'aux'
    },
    /*
    */
    {
        path: '**',
        redirectTo: 'home'
    }
];
exports.AppRouterModule = router_1.RouterModule.forRoot(APP_ROUTES, {
    preloadingStrategy: router_1.PreloadAllModules
});
//# sourceMappingURL=app.routes.js.map