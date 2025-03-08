import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChronoPageRoutingModule } from './chrono-routing.module';
import { ChronoPage } from './chrono.page';
import { ChronoSearchAndCreationComponent } from 'src/app/_components/_chrono/chrono-search-and-creation/chrono-search-and-creation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChronoPageRoutingModule,
    ChronoSearchAndCreationComponent,
  ],
  declarations: [ChronoPage]
})
export class ChronoPageModule {}
