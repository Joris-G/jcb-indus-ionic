import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChronoPageRoutingModule } from './chrono-routing.module';

import { ChronoPage } from './chrono.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChronoPageRoutingModule
  ],
  declarations: [ChronoPage]
})
export class ChronoPageModule {}
