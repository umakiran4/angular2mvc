import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';

import { SkillService } from '../skills/services/skills.service';

import { SkillComponent } from '../skills/components/skill.component';
import { SkillsComponent } from '../skills/components/skills.component';
import { SkillDetailComponent } from '../skills/components/skill-detail.component';

@NgModule({
    imports: [CommonModule, SkillRoutingModule],
    declarations: [SkillComponent, SkillsComponent, SkillDetailComponent],
    providers: [SkillService],
    exports: [CommonModule, SkillComponent, SkillDetailComponent]
})

export class SkillModule { }

