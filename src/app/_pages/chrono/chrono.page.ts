import { Component, inject, OnInit } from '@angular/core';
import { ChronoService } from 'src/app/_services/chrono/chrono.service';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
})
export class ChronoPage {
  readonly chronoService = inject(ChronoService);

}
