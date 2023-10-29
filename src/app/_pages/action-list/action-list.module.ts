import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionListPageRoutingModule } from './action-list-routing.module';

import { ActionListPage } from './action-list.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    ActionListPageRoutingModule,
  ],
  declarations: [ActionListPage],
})
export class ActionListPageModule {}
