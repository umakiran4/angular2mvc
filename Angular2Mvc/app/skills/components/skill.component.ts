import { Component, Input } from '@angular/core';

import { Skill } from '../../models/skill';


@Component({
    moduleId: module.id,
    selector: 'technical-skill',
    templateUrl: '../views/skill.component.html'
})

export class SkillComponent {
    @Input() techSkill: Skill;
}