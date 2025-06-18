import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Progetto, ProgettoQueryParams, ProgettoResponse} from '../models/progetto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class ProgettiListService {

  private progettiAPIUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getProgettiPaginati(progettiObject: ProgettoQueryParams): Observable<ProgettoResponse> {
  let progettiPaginatiParams = new HttpParams();
  Object.entries(progettiObject).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      progettiPaginatiParams = progettiPaginatiParams.set(key, value.toString());
    }
    });

    console.log("progetti: ", progettiPaginatiParams)

    return this.http.get<ProgettoResponse>(this.progettiAPIUrl + '/projects/list', {params: progettiPaginatiParams})
  }

  deleteProject(id_progetto: number): Observable<void>{
    return this.http.delete<void>(this.progettiAPIUrl + '/project/delete', {
      params: {id_progetto}
    })
  }

  getProject(id_progetto: number): Observable<Progetto>{
    return this.http.get<Progetto>(this.progettiAPIUrl + `/project/${id_progetto}`)
  }

  addProject(progetto: Progetto): Observable<void>{
    return this.http.post<void>(this.progettiAPIUrl + '/project/add', progetto)
  }

  updateProject(progetto: Progetto, id_progetto: number): Observable<void>{
    return this.http.put<void>(this.progettiAPIUrl + `/project/update/${id_progetto}`, progetto)
  }

  getAllProjects(): Observable<Progetto[]>{
    return this.http.get<Progetto[]>(this.progettiAPIUrl + '/projects/all');
  }

  getPersoneByProjectId(id_progetto: number): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.progettiAPIUrl + `/project/${id_progetto}/users`)
  }

  removeUsersFromProject(personaId: number[], projectId: number): Observable<void>{
    return this.http.delete<void>(this.progettiAPIUrl + `/project/${projectId}/users`, {
      params: {personaId}
    })
  }
}
