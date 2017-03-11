import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillsComponent } from './skills/components/skills.component';


export const routes: Routes = [
    { path: '', redirectTo: '/skills', pathMatch: 'full' },
    { path: 'index', redirectTo: '/skills', pathMatch: 'full' },
    { path: 'skills', component: SkillsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

