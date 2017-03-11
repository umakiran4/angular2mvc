import { Component, OnInit } from '@angular/core';

import { SkillService } from '../services/skills.service';

import { Skill } from '../../models/skill';


@Component({
    moduleId: module.id,
    selector: 'skills',
    templateUrl: '../views/skills.component.html'
})

export class SkillsComponent implements OnInit {
    skills: Skill[];

    constructor(private skillsService: SkillService) { }

    getAllSkills() {
        this.skillsService.getSkills().subscribe(result => { this.skills = result }, error => { alert(error); });
    }

    ngOnInit(): void {
        this.getAllSkills();
    }
}