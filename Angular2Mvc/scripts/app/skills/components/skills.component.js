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
var skills_service_1 = require('../services/skills.service');
var SkillsComponent = (function () {
    function SkillsComponent(skillsService) {
        this.skillsService = skillsService;
    }
    SkillsComponent.prototype.getAllSkills = function () {
        var _this = this;
        this.skillsService.getSkills().subscribe(function (result) { _this.skills = result; }, function (error) { alert(error); });
    };
    SkillsComponent.prototype.ngOnInit = function () {
        this.getAllSkills();
    };
    SkillsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'skills',
            template: '<div class="panel panel-info" style="margin-top: 75px"><div class="panel-heading">Skill Management</div><div class="panel-body"><ul class="list-group"><li *ngFor="let skillItem of skills"><technical-skill [techSkill]="skillItem"></technical-skill></li></ul></div></div>'
        }), 
        __metadata('design:paramtypes', [skills_service_1.SkillService])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
