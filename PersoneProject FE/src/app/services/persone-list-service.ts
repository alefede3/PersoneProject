import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Persona, PersonaQueryParams, PersonaResponse } from '../models/persona';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

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

  getNumberListaPersoneLength(): Observable<number>{
    return this.http.get<number>(this.PersoneAPIUrl + '/list/size')
  }
   
  savePersona(persona: Persona, id: number): Observable<void>{
    return this.http.put<void>(this.PersoneAPIUrl + `/person/${id}`, persona)
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
}
