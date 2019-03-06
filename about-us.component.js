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
var core_1 = require("@angular/core");
var AboutUsComponent = (function () {
    function AboutUsComponent() {
        this.structures = [
            { Month: 'For 3 months', TrainerName: 'Vijay Patil', Fees: '4000/-' },
            { Month: 'For 6 months', TrainerName: 'Sanjay Raut', Fees: '7500/-' },
            { Month: 'For 12 months', TrainerName: 'Vishal Pawar', Fees: '1400/-' }
        ];
    }
    AboutUsComponent = __decorate([
        core_1.Component({
            selector: 'my-aboutus',
            templateUrl: './app/about-us.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
exports.AboutUsComponent = AboutUsComponent;
//# sourceMappingURL=about-us.component.js.map