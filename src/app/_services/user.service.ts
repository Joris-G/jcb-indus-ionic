import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  addUser(firstname: string, lastname: string): Observable<any> {
    return this.http.post('/users/', { firstname, lastname });
  }
}
