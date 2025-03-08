import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChronoPage } from './chrono.page';
import { ChronoSearchAndCreationComponent } from 'src/app/_components/_chrono/chrono-search-and-creation/chrono-search-and-creation.component';
import { ChronoComponent } from 'src/app/_components/_chrono/chrono/chrono.component';

const routes: Routes = [
  {
    path: '',
    component: ChronoPage,
    children: [
      {
        path: '',
        component: ChronoSearchAndCreationComponent
      },
      {
        path: ':id',
        component: ChronoComponent
      }

    ]
  },
  // {
  //   path:':id',
  //   component:Chrono
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChronoPageRoutingModule {}
