import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginAPIUrl= 'http://localhost:8080/login'

  constructor(private http: HttpClient) {}

  credenzialiGiuste(username: string, password: string): Observable<boolean>{
    return this.http.post<boolean>(this.loginAPIUrl, {username, password});
  }
}
