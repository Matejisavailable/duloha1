import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User, UserZoznam} from "./models/user-model";

@Injectable({
  providedIn: 'root'
})
export class OsobaServiceService {

  private apiUrl = 'http://localhost:8080/api/Users';

  constructor(private http: HttpClient) { }

  getOsoby(): Observable<UserZoznam[]> {
    return this.http.get<UserZoznam[]>(`${this.apiUrl}`);
  }

  getOsoba(osobaId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${osobaId}`);
  }

  createOsoba(osoba: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, {firstname: osoba.meno, lastname: osoba.priezvisko});
  }

}
