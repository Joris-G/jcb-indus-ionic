import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectStatusPage } from './project-status.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectStatusPageRoutingModule {}
