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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var highlight_directiv_1 = require('./directives/highlight.directiv');
var student_service_1 = require('./services/student.service');
var home_component_1 = require('./home.component');
var about_us_component_1 = require('./about-us.component');
var welcome_component_1 = require('./welcome.component');
var gallery_component_1 = require('./gallery.component');
var gymservise_component_1 = require('./gymservise.component');
var contactus_component_1 = require('./contactus.component');
var notfound_component_1 = require('./notfound.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'welcome', pathMatch: "full" },
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'gymservice/:id', component: gymservise_component_1.GymServiceComponent },
                    { path: 'galleryPage', component: gallery_component_1.GalleryComponent },
                    { path: 'aboutus', component: about_us_component_1.AboutUsComponent },
                    { path: 'contactus', component: contactus_component_1.ContactUsComponent },
                ])],
            declarations: [app_component_1.AppComponent, highlight_directiv_1.HighlightDirective, welcome_component_1.WelcomeComponent, gallery_component_1.GalleryComponent,
                home_component_1.HomeComponent, about_us_component_1.AboutUsComponent, gymservise_component_1.GymServiceComponent, contactus_component_1.ContactUsComponent, notfound_component_1.NotFoundComponent],
            providers: [student_service_1.StudentService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map