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
var StudentService = (function () {
    function StudentService() {
        this.students = [];
        this.images = [];
        this.students = [{ id: 1, name: 'CARDIO', info: 'Cardiovascular fitness is the ability of the heart and lungs to supply oxygen-rich blood to the working muscle tissues, and the ability of the muscles to use oxygen to produce energy for movement.This type of fitness is a health-related component of physical fitness that is brought about by sustained physical activity.It helps you burn fat and calories for weight loss.' },
            { id: 2, name: 'DUMB BELLS', info: 'Dumbbells are often used for joint-isolation exercises such as biceps curls, chest flyes or shoulder raises. Using dumbbells for full-body, multiplanar movements, however, can provide a variety of different strength outcomes. It also offers many benefits for cardiorespiratory fitness and flexibility.' },
            { id: 3, name: 'BENCH PRESS', info: 'The barbell bench press is one of three lifts in the sport of powerlifting (alongside the deadlift and squat) and is the only lift in the sport of Paralympic powerlifting. It is also used extensively in weight training, bodybuilding, and other types of training to develop the chest muscles.' },
            { id: 4, name: 'LAT PULLDOWN MACHINE', info: 'The lat pulldown is a basic upper body strength exercise that targets the upper back. The exercise also improves stability in the lower back and core.' }
        ];
        this.images = [
            { gymImage: "images/firstImage.jpg" }, { gymImage: "images/gym.jpg" }, { gymImage: "images/secondImage.jpg" }, { gymImage: "images/the-gym.jpg" }
        ];
    }
    StudentService.prototype.getAllImages = function () {
        return this.images;
    };
    StudentService.prototype.getAllStudents = function () {
        return this.students;
    };
    StudentService.prototype.getStudentById = function (studentId) {
        return this.students.filter(function (x) { return x.id == studentId; })[0];
    };
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map