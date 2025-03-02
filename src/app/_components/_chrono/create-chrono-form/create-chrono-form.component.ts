import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonInput } from '@ionic/angular';
import { ChronoService } from 'src/app/_services/chrono/chrono.service';

@Component({
  selector: 'app-create-chrono-form',
  templateUrl: './create-chrono-form.component.html',
  styleUrls: ['./create-chrono-form.component.scss'],
  standalone: true,
  imports:[FormsModule, IonicModule]
})
export class CreateChronoFormComponent   {
  private readonly chronoService = inject(ChronoService);
  chronoName: string = "";
  newChronoInput() {
    this.chronoService.createChrono({ name: this.chronoName });
  }

}
