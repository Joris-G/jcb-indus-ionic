import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import actionsData from '../../assets/mockData/actions.json';


@Injectable({
  providedIn: 'root'
})
export class DbInMemoryService implements InMemoryDbService{

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
      // Charge les données depuis les fichiers JSON
      // const users = usersData;
      const actions = actionsData;
      return { actionsData };
  }
  genId<T extends { id: number }>(collection: T[], collectionName: string): number {
    return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
  }
}
