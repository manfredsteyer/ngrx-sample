"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FlightCardComponent = (function () {
    function FlightCardComponent() {
        this.selectedChange = new core_1.EventEmitter();
        console.debug('ctor', this.selected, this.item);
    }
    FlightCardComponent.prototype.ngOnInit = function () {
        console.debug('init', this.selected, this.item);
        // BAD:
        // this.selectedChange.next(true);
    };
    FlightCardComponent.prototype.ngOnChanges = function (changes) {
        console.debug('changes', this.selected, this.item);
        if (changes['item']) {
            console.debug('\t item', changes['item'].firstChange);
        }
        if (changes['selected']) {
            console.debug('\t selected', changes['selected'].firstChange);
        }
    };
    FlightCardComponent.prototype.select = function () {
        this.selected = true;
        this.selectedChange.next(/* $event= */ this.selected);
    };
    FlightCardComponent.prototype.deselect = function () {
        this.selected = false;
        this.selectedChange.next(this.selected);
    };
    return FlightCardComponent;
}());
__decorate([
    core_1.Input()
], FlightCardComponent.prototype, "item", void 0);
__decorate([
    core_1.Input()
], FlightCardComponent.prototype, "selected", void 0);
__decorate([
    core_1.Output()
], FlightCardComponent.prototype, "selectedChange", void 0);
FlightCardComponent = __decorate([
    core_1.Component({
        selector: 'flight-card',
        templateUrl: './flight-card.component.html'
    })
], FlightCardComponent);
exports.FlightCardComponent = FlightCardComponent;
