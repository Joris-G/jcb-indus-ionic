import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chrono, ChronoCreation, ChronoList } from 'src/app/_interfaces/chrono.interface';



@Injectable({
  providedIn: 'root'
})
export class ChronoService {
  chronos?:ChronoList

  createChrono(chrono:ChronoCreation):Observable<Chrono>{
    const newChrono: Chrono = {
      id : this.setId(),
      name: chrono.name
    }
    this.chronos ? this.chronos.push(newChrono) :this.chronos = [newChrono] ;
    return of(newChrono);
  }

  getAllChrono(): Observable<ChronoList>{
    return of(this.chronos || []);
  }

  private setId():number{
    return this.chronos ? this.chronos.length + 1 : 1;
  }
}
