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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var skills_service_1 = require('../services/skills.service');
var SkillDetailComponent = (function () {
    function SkillDetailComponent(skillsService, route, location) {
        this.skillsService = skillsService;
        this.route = route;
        this.location = location;
    }
    SkillDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.skillsService.getSKill(+params['id']); })
            .subscribe(function (skill) {
            _this.techSkill = skill;
        });
    };
    SkillDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    SkillDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'skill-details',
            template: '<div *ngIf="techSkill" style="margin-top:75px">{{ techSkill.name }} Version {{ techSkill.version }} From {{techSkill.yearFrom | date}} To - {{techSkill.yearTo | date}}</div><a (click)="goBack()">Back</a>'
        }), 
        __metadata('design:paramtypes', [skills_service_1.SkillService, router_1.ActivatedRoute, common_1.Location])
    ], SkillDetailComponent);
    return SkillDetailComponent;
}());
exports.SkillDetailComponent = SkillDetailComponent;
