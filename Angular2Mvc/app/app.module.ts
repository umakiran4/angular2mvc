
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { SkillModule } from './skills/skill.module';
import { AppComponent } from './app.component';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule, SkillModule],
    declarations: [AppComponent],    
    bootstrap: [AppComponent]
})
export class AppModule { }