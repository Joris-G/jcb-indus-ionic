import { Component, OnInit, inject } from '@angular/core';
import { HeaderTitleService } from 'src/app/_services/title/header-title.service';

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.page.html',
  styleUrls: ['./project-status.page.scss'],
})
export class ProjectStatusPage implements OnInit {
  pageTitle: string = 'Project Status';
  headerTitleService = inject(HeaderTitleService);
  constructor() { }

  ngOnInit() {
    this.headerTitleService.setTitle(this.pageTitle);
  }
}
