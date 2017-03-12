import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillDetailComponent } from '../skills/components/skill-detail.component';

export const routes: Routes = [
    { path: 'skill-detail/:id', component: SkillDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SkillRoutingModule { }