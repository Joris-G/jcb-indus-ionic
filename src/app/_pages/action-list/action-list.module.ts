import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionListPageRoutingModule } from './action-list-routing.module';

import { ActionListPage } from './action-list.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ActionService } from 'src/app/_services/actions/action.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    ActionListPageRoutingModule,
    DatePipe
  ],
  providers: [ActionService],
  declarations: [ActionListPage],
})
export class ActionListPageModule {}
