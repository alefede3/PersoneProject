import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Progetto, ProgettoQueryParams, ProgettoResponse} from '../models/progetto';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProgettiListService {

  private ProgettiAPIUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getProgettiPaginati(progettiObject: ProgettoQueryParams): Observable<ProgettoResponse> {
  let progettiPaginatiParams = new HttpParams();
  Object.entries(progettiObject).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      progettiPaginatiParams = progettiPaginatiParams.set(key, value.toString());
    }
    });

    console.log("progetti: ", progettiPaginatiParams)

    return this.http.get<ProgettoResponse>(this.ProgettiAPIUrl + '/projects/list', {params: progettiPaginatiParams})
  }

  deleteProject(id_progetto: number): Observable<void>{
    return this.http.delete<void>(this.ProgettiAPIUrl + '/project/delete', {
      params: {id_progetto}
    })
  }

  getProject(id_progetto: number): Observable<Progetto>{
    return this.http.get<Progetto>(this.ProgettiAPIUrl + `/project/${id_progetto}`)
  }

  addProject(progetto: Progetto): Observable<void>{
    return this.http.post<void>(this.ProgettiAPIUrl + '/project/add', progetto)
  }

  updateProject(progetto: Progetto, id_progetto: number): Observable<void>{
    return this.http.put<void>(this.ProgettiAPIUrl + `/project/update/${id_progetto}`, progetto)
  }
}
