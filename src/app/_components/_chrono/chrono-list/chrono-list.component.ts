import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, IonList } from '@ionic/angular';
import { ChronoService } from 'src/app/_services/chrono/chrono.service';

@Component({
  selector: 'app-chrono-list',
  templateUrl: './chrono-list.component.html',
  styleUrls: ['./chrono-list.component.scss'],
  standalone:true,
  imports: [IonicModule, RouterModule]
})
export class ChronoListComponent {
  readonly chronoService = inject(ChronoService);


}
