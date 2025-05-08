import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona, PersonaResponse } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ListaPersoneService {

  private PersoneAPIUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getPersonePaginate(page: number, size: number, nomeInput: string, cognomeInput: string): Observable<PersonaResponse>{
    return this.http.get<PersonaResponse>(this.PersoneAPIUrl + '/list', {
      params: {page, size, nomeInput, cognomeInput}
    })
  }

  /* getPersoneFiltrateNome(inputNome: string): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.PersoneAPIUrl + '/list/filtroNome', {
      params: {inputNome}
    })
  }

  getPersoneFiltrateCognome(inputCognome: string): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.PersoneAPIUrl + '/list/filtroCognome', {
      params: {inputCognome}
    })
  } */

  updatePersona(persona: Persona, id: number): Observable<void> {
    return this.http.put<void>(this.PersoneAPIUrl + `/person/${id}`, persona);
  }

  getPersona(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.PersoneAPIUrl + `/person/${id}`)
  }

  getListaPersone(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.PersoneAPIUrl + '/list')
  }
   
  savePersona(persona: Persona, id: number): Observable<void>{
    return this.http.put<void>(this.PersoneAPIUrl + `/person/${id}`, persona)
  }

  addPersona(nome: String, cognome: String, eta: number): Observable<void>{
    return this.http.post<void>(this.PersoneAPIUrl + '/add', {nome, cognome, eta}
    )
  }

  deletePersona(id: number): Observable<void>{
    return this.http.delete<void>(this.PersoneAPIUrl + '/person/delete', {
      params: {id}
    })
  }
}
