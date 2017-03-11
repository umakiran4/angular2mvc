import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

import { Skill } from '../../models/skill';

@Injectable()

export class SkillService {

    constructor(private http: Http) { }

    private headers = new Headers({ 'Content-Type': 'application/json' });

    getSkills() {
        const allSkillsUrl = 'api/all-skills';
        return this.http.get(allSkillsUrl, { headers: this.headers }).map(res => res.json() as Skill[]);    
    }
}