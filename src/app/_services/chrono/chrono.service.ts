import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ChronoCreation, ChronoProject, ChronoProjectCreation, ChronoProjectList } from 'src/app/_interfaces/chrono.interface';



@Injectable({
  providedIn: 'root'
})
export class ChronoService {

  private _chronoProjectList = new BehaviorSubject<ChronoProjectList | []>([]);
  currentChronoProject: Subject<ChronoProject | undefined> = new Subject();

  get chronoProjectList$(): Observable<ChronoProjectList | []> {
    return this._chronoProjectList.asObservable();
  }




  constructor() {
    this.syncChronoWithBrowser();
  }


  private initChrono(): ChronoCreation {
    return {
      parts: []
    };
  }

  setCurrentProject(id: number) {
    this.currentChronoProject.next(this._chronoProjectList.value.find(chronoProject => chronoProject.id === id));
  }

  // createChrono(chrono: ChronoProjectCreation): Observable<ChronoProject> {
  //   const newChrono: ChronoProject = {
  //     ...chrono,
  //     id: this.setId()
  //   };
  //   this.chronoProjectList.next() ? this.chronoProjectList.push(newChrono) : this.chronoProjectList = [newChrono];
  //   this.saveChronoOnBrowser();
  //   return of(newChrono);
  // }

  addChronoProject(newChronoProject: ChronoProjectCreation): void {
    const newChrono: ChronoProject = {
      ...newChronoProject,
      id: this.setId()
    };
    const currentChronoProjects = this._chronoProjectList.getValue();
    this._chronoProjectList.next([...currentChronoProjects, newChrono]);
  }

  // getAllChrono(): Observable<ChronoProjectList> {
  //   return of(this.chronoProjectList || []);
  // }

  private setId():number{
    return this._chronoProjectList.value ?? this._chronoProjectList.value.length + 1 : 1;
  }

  private saveChronoOnBrowser() {
    localStorage.setItem('chronoProjects', JSON.stringify(this._chronoProjectList.value));
  }

  private syncChronoWithBrowser() {
    this._chronoProjectList.next(JSON.parse(localStorage.getItem('chronoProjects')!));
  }
}
