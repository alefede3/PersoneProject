import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ListaPersoneService {

  private PersoneAPIUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

   getPersonePaginate(page: number, size: number): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.PersoneAPIUrl + '/list', {
      params: {page, size}
    })
  }

  getPersoneFiltrateNome(inputNome: string): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.PersoneAPIUrl + '/list/filtroNome', {
      params: {inputNome}
    })
  }

  getPersoneFiltrateCognome(inputCognome: string): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.PersoneAPIUrl + '/list/filtroCognome', {
      params: {inputCognome}
    })
  }

  updatePersona(persona: Persona, id: number): Observable<void> {
    return this.http.put<void>(this.PersoneAPIUrl + `/person/${id}`, persona);
  }

  getPersona(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.PersoneAPIUrl + `/person/${id}`)
  }

  getListaPersone(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.PersoneAPIUrl + '/list')
  }
   
  savePersona(persona: Persona): Observable<void>{
    return this.http.put<void>(this.PersoneAPIUrl + '/person', persona)
  }

  addPersona(nome: String, cognome: String, eta: number): Observable<void>{
    return this.http.post<void>(this.PersoneAPIUrl + '/add', {nome, cognome, eta}
    )
  }
}
