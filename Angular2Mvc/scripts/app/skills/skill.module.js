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
var common_1 = require('@angular/common');
var skills_service_1 = require('../skills/services/skills.service');
var skill_component_1 = require('../skills/components/skill.component');
var skills_component_1 = require('../skills/components/skills.component');
var SkillModule = (function () {
    function SkillModule() {
    }
    SkillModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [skill_component_1.SkillComponent, skills_component_1.SkillsComponent],
            providers: [skills_service_1.SkillService],
            exports: [common_1.CommonModule, skill_component_1.SkillComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SkillModule);
    return SkillModule;
}());
exports.SkillModule = SkillModule;
