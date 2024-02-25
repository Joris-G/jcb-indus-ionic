import { Injectable, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleStrategy } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderTitleService {
  private titleSubject = new BehaviorSubject('Initial Title');
  public title: Observable<string> = this.titleSubject.asObservable()
  titleService = inject(Title);

  setTitle(title: string) {
    this.titleSubject.next(title);
    this.titleService.setTitle(title);
  }
}
