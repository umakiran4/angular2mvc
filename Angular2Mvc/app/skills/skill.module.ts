import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SkillService } from '../skills/services/skills.service';

import { SkillComponent } from '../skills/components/skill.component';
import { SkillsComponent } from '../skills/components/skills.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SkillComponent, SkillsComponent],
    providers: [SkillService],
    exports: [CommonModule, SkillComponent]
})

export class SkillModule { }

