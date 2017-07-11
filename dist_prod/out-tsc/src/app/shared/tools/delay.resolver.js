"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var DelayResolver = (function () {
    function DelayResolver() {
    }
    DelayResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of(null).delay(5000);
    };
    return DelayResolver;
}());
exports.DelayResolver = DelayResolver;
//# sourceMappingURL=delay.resolver.js.map