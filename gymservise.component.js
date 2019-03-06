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
var router_1 = require("@angular/router");
var student_service_1 = require("./services/student.service");
var GymServiceComponent = (function () {
    function GymServiceComponent(_activteRoute, _studentService) {
        var _this = this;
        this._activteRoute = _activteRoute;
        this._studentService = _studentService;
        this._activteRoute.params.subscribe(function (data) {
            _this.studentId = data['id'];
            _this.student = _this._studentService.getStudentById(_this.studentId);
        });
    }
    GymServiceComponent = __decorate([
        core_1.Component({
            selector: 'my-gymservicecomponent',
            templateUrl: './app/gymservice.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, student_service_1.StudentService])
    ], GymServiceComponent);
    return GymServiceComponent;
}());
exports.GymServiceComponent = GymServiceComponent;
//# sourceMappingURL=gymservise.component.js.map