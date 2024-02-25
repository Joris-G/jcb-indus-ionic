import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './_guards/home.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'action/:id',
    loadChildren: () =>
      import('./_pages/action/action.module').then((m) => m.ActionPageModule),
  },
  {
    path: 'action-list',
    loadChildren: () =>
      import('./_pages/action-list/action-list.module').then(
        (m) => m.ActionListPageModule
      ),
  },
  {
    path: 'project',
    title: 'PROJET',
    loadChildren: () =>
      import('./_pages/project/project.module').then(
        (m) => m.ProjectPageModule
      ),
  },
  {
    path: 'project-status/:projectId',
    loadChildren: () =>
      import('./_pages/project-status/project-status.module').then(
        (m) => m.ProjectStatusPageModule
      ),
  },
  {
    path: 'home',
    canActivate: [HomeGuard],

    loadChildren: () =>
      import('./_pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./_pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./_pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./_pages/settings/settings.module').then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: 'projects',
    loadChildren: () => import('./_pages/projects/projects.module').then(m => m.ProjectsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
