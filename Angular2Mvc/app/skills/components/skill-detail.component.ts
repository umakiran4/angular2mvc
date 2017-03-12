import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SkillService } from '../services/skills.service';

import { Skill } from '../../models/skill';


@Component({
    moduleId: module.id,
    selector: 'skill-details',
    templateUrl: '../views/skill-detail.component.html'
})

export class SkillDetailComponent implements OnInit {

    constructor(private skillsService: SkillService, private route: ActivatedRoute,
        private location: Location) { }

    techSkill: Skill;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.skillsService.getSKill(+params['id']))
            .subscribe(skill => {                
                this.techSkill = skill
            });
    }

    goBack(): void {
        this.location.back();
    }

}