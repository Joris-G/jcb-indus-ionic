import { Component, OnInit, inject } from '@angular/core';
import { HeaderTitleService } from 'src/app/_services/header-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pageTitle: string = 'Home';
  headerTitleService = inject(HeaderTitleService);
  constructor() {}

  ngOnInit() {
    this.headerTitleService.setTitle(this.pageTitle);
  }
}
