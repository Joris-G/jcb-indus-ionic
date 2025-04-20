import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '../../_interfaces/action.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ActionService  {
private readonly http = inject(HttpClient)
  private apiUrl = 'api/actions';
  getActions(): Observable<Action[]> {
    return this.http.get<Action[]>(this.apiUrl);
  }
}
