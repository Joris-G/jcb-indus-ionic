import { Injectable, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleStrategy } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderTitleService {
  title = new BehaviorSubject('Initial Title');
  titleService = inject(Title);
  setTitle(title: string) {
    this.title.next(title);
    this.titleService.setTitle(title);
  }
}
