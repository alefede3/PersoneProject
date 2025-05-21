import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgettoQueryParams, ProgettoResponse } from '../models/progetto';
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

    return this.http.get<ProgettoResponse>(this.ProgettiAPIUrl + '/projects/list', {params: progettiPaginatiParams})
  }
}
