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

  private listaPersoneAPIUrl = 'http://localhost:8080/list';

  constructor(private http: HttpClient) {}

  nuovoNome: string = "";
  nuovoCognome: string = "";
  nuovaEta: number = 0;

  getPersonePaginate(page: number, size: number): Observable<Persona[]>{
    return this.http.get<Persona[]>('http://localhost:8080/list', {
      params: {page, size}
    })
  }

  getPersoneFiltrateNome(inputNome: string): Observable<Persona[]>{
    return this.http.get<Persona[]>('http://localhost:8080/list/filtroNome', {
      params: {inputNome}
    })
  }

  getPersoneFiltrateCognome(inputCognome: string): Observable<Persona[]>{
    return this.http.get<Persona[]>('http://localhost:8080/list/filtroCognome', {
      params: {inputCognome}
    })
  }

  updatePersona(persona: Persona, id: number): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/person/${id}`, persona);
  }

  getPersona(id: number): Observable<Persona>{
    return this.http.get<Persona>(`http://localhost:8080/person/${id}`)
  }

  getListaPersone(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`http://localhost:8080/list`)
  }
   
  savePersona(persona: Persona): Observable<void>{
    return this.http.put<void>(`http://localhost:8080/person`, persona)
  }
}
