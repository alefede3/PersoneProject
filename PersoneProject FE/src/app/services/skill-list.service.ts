import { Injectable } from '@angular/core';
import {Skill, SkillQueryParams, SkillResponse} from '../models/skill';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillListService {

  private skillAPIUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


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
}

