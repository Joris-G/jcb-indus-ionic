import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChronoPageRoutingModule } from './chrono-routing.module';

import { ChronoPage } from './chrono.page';
import { CreateChronoFormComponent } from 'src/app/_components/_chrono/create-chrono-form/create-chrono-form.component';
import { ChronoListComponent } from 'src/app/_components/_chrono/chrono-list/chrono-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChronoPageRoutingModule,
    CreateChronoFormComponent,
    ChronoListComponent,
  ],
  declarations: [ChronoPage]
})
export class ChronoPageModule {}
