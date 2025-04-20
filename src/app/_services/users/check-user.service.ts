import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {
  checkUsernameExists(value: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
