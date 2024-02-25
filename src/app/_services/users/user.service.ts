import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../_interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }
  addUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Ajoute d'autres en-têtes si nécessaire
    });
    return this.http.post<Observable<User>>('http://localhost:3000/api/users/', user, { headers });
  }

}
