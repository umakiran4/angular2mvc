import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { SkillService } from '../skills/services/skills.service';

import { SkillComponent } from '../skills/components/skill.component';
import { SkillsComponent } from '../skills/components/skills.component';

@NgModule({
    imports: [CoreModule],
    declarations: [SkillComponent, SkillsComponent],
    providers: [SkillService],
    exports: [SkillComponent]
})

export class SkillModule { }

