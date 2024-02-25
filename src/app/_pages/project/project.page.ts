import { Component, OnInit, inject } from '@angular/core';
import { HeaderTitleService } from 'src/app/_services/title/header-title.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  pageTitle: string = 'Project';
  headerTitleService = inject(HeaderTitleService);
  constructor() { }

  ngOnInit() {
    this.headerTitleService.setTitle(this.pageTitle);
  }
}
