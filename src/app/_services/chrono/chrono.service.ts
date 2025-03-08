import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chrono, ChronoCreation, ChronoList, ChronoProject, ChronoProjectCreation, ChronoProjectList } from 'src/app/_interfaces/chrono.interface';



@Injectable({
  providedIn: 'root'
})
export class ChronoService {
  chronoProjectList?: ChronoProjectList
  $$currentChrono: WritableSignal<ChronoProjectCreation> = signal(this.initCurrentChronoProject());

  constructor() {
    this.syncChronoWithBrowser();
  }

  private initCurrentChronoProject(): ChronoProjectCreation {
    return {
      name: "",
      project: "",
      chronos: []
    };
  }

  private initChrono(): ChronoCreation {
    return {
      parts: []
    };
  }

  createChrono(chrono: ChronoProjectCreation): Observable<ChronoProject> {
    const newChrono: ChronoProject = {
      ...chrono,
      id: this.setId()
    };
    this.chronoProjectList ? this.chronoProjectList.push(newChrono) : this.chronoProjectList = [newChrono];
    this.saveChronoOnBrowser();
    return of(newChrono);
  }

  getAllChrono(): Observable<ChronoProjectList> {
    return of(this.chronoProjectList || []);
  }

  private setId():number{
    return this.chronoProjectList ? this.chronoProjectList.length + 1 : 1;
  }

  private saveChronoOnBrowser() {
    localStorage.setItem('chronoProjects', JSON.stringify(this.chronoProjectList));
  }

  private syncChronoWithBrowser() {
    this.chronoProjectList = JSON.parse(localStorage.getItem('chronoProjects')!);
  }
}
