import { Injectable } from '@angular/core';
import {Skill, SkillQueryParams, SkillResponse} from '../models/skill';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Persona} from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class SkillListService {

  private skillAPIUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  private skillsSubject = new BehaviorSubject<Skill[]>([]);

  getSkillPaginate(skillObject: SkillQueryParams): Observable<SkillResponse> {
    let skillPaginateParams = new HttpParams();
    Object.entries(skillObject).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        skillPaginateParams = skillPaginateParams.set(key, value.toString());
      }
    });

    return this.http.get<SkillResponse>(this.skillAPIUrl + '/skill/list', {params: skillPaginateParams})
  }

  addSkill(skill: Skill): Observable<void>{
    return this.http.post<void>(this.skillAPIUrl + '/skill/add', skill)
  }

  deleteSkill(id_skill: number): Observable<void>{
    return this.http.delete<void>(this.skillAPIUrl + '/skill/delete', {
      params: {id_skill}
    })
  }

  getSkill(id: number): Observable<Skill>{
    return this.http.get<Skill>(this.skillAPIUrl + `/skill/${id}`)
  }

  updateSkill(skill: Skill, id: number): Observable<void>{
    return this.http.put<void>(this.skillAPIUrl + `/skill/update/${id}`, skill)
  }

  getAllSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.skillAPIUrl + '/skills/all');
  }

  getUsersBySkillId(skillId: number): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.skillAPIUrl + `/skill/${skillId}/users`)
  }

  removeUsersFromSkill(personaId: number[], skillId: number): Observable<void>{
    return this.http.delete<void>(this.skillAPIUrl + `/skill/${skillId}/users`, {
      params: {personaId}
    })
  }
}

