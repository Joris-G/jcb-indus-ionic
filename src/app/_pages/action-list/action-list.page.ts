import { Component, OnInit, inject } from '@angular/core';
import { HeaderTitleService } from 'src/app/_services/header-title.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.page.html',
  styleUrls: ['./action-list.page.scss'],
})
export class ActionListPage implements OnInit {
  pageTitle: string = 'Action List';
  headerTitleService = inject(HeaderTitleService);
  constructor() {}

  ngOnInit() {
    this.headerTitleService.setTitle(this.pageTitle);
  }
}
