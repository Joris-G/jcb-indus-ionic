import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '../../_interfaces/action.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActionService  {
  private readonly http = inject(HttpClient);


  getActions(): Observable<Action[]> {
    return this.http.get<Action[]>(`${environment.apiUrl}/actions`);
  }


  update(id: number, newValue: Action): Observable<Action> {
    return this.http.patch<Action>(`${environment.apiUrl}/actions/${id}`, newValue);
  }
}
