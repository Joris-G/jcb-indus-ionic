import { Component, OnInit, inject } from '@angular/core';
import { HeaderTitleService } from 'src/app/_services/header-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageTitle: string | undefined;
  headerTitleService = inject(HeaderTitleService);

  ngOnInit(): void {
    this.headerTitleService.title.subscribe((updatedTitle) => {
      this.pageTitle = updatedTitle;
    });
  }
}
