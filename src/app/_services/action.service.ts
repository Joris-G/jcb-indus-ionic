import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '../_interfaces/action.interface';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  constructor() {}

  getActions(): Observable<Action[]> {
    return new Observable((observer) => {
      observer.next([
        {
          createdBy: 'Joris',
          creationDate: '12/10/2023',
          description: 'description test',
          needDate: '20/10/2023',
          status: 'stand by',
          title: 'action title',
          responsable: 'John',
          project: 'F10X',
        },
        {
          createdBy: 'John',
          creationDate: '30/10/2023',
          description: 'description test',
          needDate: '12/10/2023',
          status: 'a faire',
          title: 'action title',
          responsable: 'Joris',
          project: 'F10X',
        },
      ]);

      observer.complete();
    });
  }
}
