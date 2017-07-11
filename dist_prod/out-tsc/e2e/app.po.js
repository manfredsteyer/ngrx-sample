"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var StarterPage = (function () {
    function StarterPage() {
    }
    StarterPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    StarterPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return StarterPage;
}());
exports.StarterPage = StarterPage;
//# sourceMappingURL=app.po.js.map