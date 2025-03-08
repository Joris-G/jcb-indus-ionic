import { Component, OnInit } from '@angular/core';
import { ChronoListComponent } from '../chrono-list/chrono-list.component';
import { CreateChronoFormComponent } from '../create-chrono-form/create-chrono-form.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chrono-search-and-creation',
  templateUrl: './chrono-search-and-creation.component.html',
  styleUrls: ['./chrono-search-and-creation.component.scss'],
  standalone:true,
  imports:[
    IonicModule,
    ChronoListComponent,
    CreateChronoFormComponent
  ]
})
export class ChronoSearchAndCreationComponent   {


}
