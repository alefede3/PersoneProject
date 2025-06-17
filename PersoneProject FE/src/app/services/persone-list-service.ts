import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Persona, PersonaQueryParams, PersonaResponse } from '../models/persona';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import {Skill} from '../models/skill';
import {Projects} from '@angular/cli/lib/config/workspace-schema';
import {Progetto} from '../models/progetto';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ListaPersoneService {

  private PersoneAPIUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  totalPersons = new Observable<number>();

  getPersonePaginate(personeObject: PersonaQueryParams): Observable<PersonaResponse> {

  let personePaginateParams = new HttpParams();

  Object.entries(personeObject).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      personePaginateParams = personePaginateParams.set(key, value.toString());
    }
  });

  return this.http.get<PersonaResponse>(this.PersoneAPIUrl + '/list', { params: personePaginateParams });
  }

  updatePersona(persona: Persona, id: number): Observable<void> {
    return this.http.put<void>(this.PersoneAPIUrl + `/person/${id}`, persona);
  }

  getPersona(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.PersoneAPIUrl + `/person/${id}`)
  }

  addPersona(aggiungiPersonaObject: Persona): Observable<void>{
    return this.http.post<void>(this.PersoneAPIUrl + '/add', aggiungiPersonaObject
    )
  }

  deletePersona(id: number): Observable<void>{
    return this.http.delete<void>(this.PersoneAPIUrl + '/person/delete', {
      params: {id}
    })
  }

  numeroPersoneUpdated(numeroAggiornato: number){
    this.totalPersons = of(numeroAggiornato);
  }

  addSkillToPersona(idPersona: number, idSelectedSkills: number[]){
    return this.http.post<void>(this.PersoneAPIUrl + `/user/${idPersona}/skills`, {idPersona, idSelectedSkills})
  }

  getSkillsByPersonaId(id: number):Observable<Skill[]>{
    return this.http.get<Skill[]>(this.PersoneAPIUrl + `/user/${id}/skills`)
  }

  addProjectToPersona(idPersona: number, idSelectedProject: number | null):Observable<void>{
    return this.http.post<void>(this.PersoneAPIUrl + `/user/${idPersona}/project`,
      {idPersona, idSelectedProject}
    )
  }

  getProjectByPersonaID(id: number):Observable<Progetto>{
    return this.http.get<Progetto>(this.PersoneAPIUrl + `/user/${id}/project`)
  }
}
