"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CityValidator = (function () {
    function CityValidator() {
    }
    CityValidator.validateCity = function (c) {
        if (c.value == 'Graz'
            || c.value == 'Hamburg'
            || c.value == 'Stuttgart'
            || c.value == 'Wien') {
            return {};
        }
        return {
            city: {
                actual: c.value,
                expected: 'Graz, Hamburg, Suttgart, Wien',
                reason: 42,
                tryAgain: 'never'
            }
        };
    };
    CityValidator.validateCityWithParams = function (allowedCities) {
        // Array<string> === string[]
        return function (c) {
            if (allowedCities.indexOf(c.value) > -1) {
                return {};
            }
            return {
                cityWithParams: true
            };
        };
    };
    return CityValidator;
}());
exports.CityValidator = CityValidator;
