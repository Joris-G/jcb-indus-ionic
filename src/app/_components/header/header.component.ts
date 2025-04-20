import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_services/authentication/auth.service';
import { HeaderTitleService } from 'src/app/_services/title/header-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public menu_items = [
    { menuName: 'Actions', url: '/action-list', color: 'primary' },
    { menuName: 'Users', url: '/users', color: 'primary' },
    { menuName: 'Projets', url: '/projects', color: 'primary' },
    { menuName: 'Chrono', url: '/chrono', color: 'primary' }
  ];
  private headerTitleService = inject(HeaderTitleService);
  public pageTitle$: Observable<string> = this.headerTitleService.title;
  private authService = inject(AuthService);
  constructor() { }


  ionViewWillEnter() {
    console.log('test view');
  }

  logoutClick() {
    this.authService.logout();
  }

}
