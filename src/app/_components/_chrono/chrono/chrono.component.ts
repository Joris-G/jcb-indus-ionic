import { AsyncPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChronoService } from 'src/app/_services/chrono/chrono.service';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss'],
  standalone:true,
  imports: [IonicModule, AsyncPipe],
})
export class ChronoComponent  {
  private readonly chronoService = inject(ChronoService);
  private readonly router = inject(ActivatedRoute);
  currentChrono$ = this.chronoService.currentChronoProject.asObservable();

  @Input()
  set id(chronoId: string) {
    console.log(chronoId);
    this.chronoService.setCurrentProject(+chronoId);
  }

  onClick(){
    
  }


}
