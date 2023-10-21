import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectStatusPageRoutingModule } from './project-status-routing.module';

import { ProjectStatusPage } from './project-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectStatusPageRoutingModule
  ],
  declarations: [ProjectStatusPage]
})
export class ProjectStatusPageModule {}
