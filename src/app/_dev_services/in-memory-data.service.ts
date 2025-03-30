import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // Simulez vos données ici
    const users = [
      { id: 1, name: 'Jean Dupont', email: 'jean@example.com' },
      { id: 2, name: 'Marie Martin', email: 'marie@example.com' }
    ];

    const products = [
      { id: 1, name: 'Produit 1', price: 10.99 },
      { id: 2, name: 'Produit 2', price: 20.50 }
    ];

    // Retournez un objet avec toutes vos collections
    return { users, products };
  }

  // Optionnel : génération automatique des IDs
  genId<T extends { id: number }>(collection: T[], collectionName: string): number {
    return collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
  }
}
