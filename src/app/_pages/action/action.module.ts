import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActionPageRoutingModule } from './action-routing.module';
import { ActionPage } from './action.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    ActionPageRoutingModule,
  ],
  declarations: [ActionPage],
})
export class ActionPageModule { }
