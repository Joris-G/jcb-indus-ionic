import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chrono, ChronoCreation, ChronoList } from 'src/app/_interfaces/chrono.interface';



@Injectable({
  providedIn: 'root'
})
export class ChronoService {
  chronos?:ChronoList
  constructor() {
    this.syncChronoWithBrowser();
  }
  createChrono(chrono:ChronoCreation):Observable<Chrono>{
    const newChrono: Chrono = {
      ...chrono,
      id: this.setId()
    };
    this.chronos ? this.chronos.push(newChrono) : this.chronos = [newChrono];
    this.saveChronoOnBrowser();
    return of(newChrono);
  }

  getAllChrono(): Observable<ChronoList>{
    return of(this.chronos || []);
  }

  private setId():number{
    return this.chronos ? this.chronos.length + 1 : 1;
  }

  private saveChronoOnBrowser() {
    localStorage.setItem('chronos', JSON.stringify(this.chronos));
  }

  private syncChronoWithBrowser() {
    this.chronos = JSON.parse(localStorage.getItem('chronos')!);
  }
}
