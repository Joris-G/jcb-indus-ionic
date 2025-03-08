import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChronoService } from 'src/app/_services/chrono/chrono.service';

@Component({
  selector: 'app-create-chrono-form',
  templateUrl: './create-chrono-form.component.html',
  styleUrls: ['./create-chrono-form.component.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule, ReactiveFormsModule]
})
export class CreateChronoFormComponent   {
  private readonly fb = inject(FormBuilder);
  createChronoForm!: FormGroup;
  private readonly chronoService = inject(ChronoService);

  newChronoInput() {
    this.chronoService.createChrono(this.createChronoForm.value)
      .subscribe(
        {
          next: (value) => {
            this.createChronoForm.reset()
          },
          error(err) {

          },
        }
      );
  }
  constructor() {
    this.createChronoForm = this.fb.group({
      name: ['', Validators.required],
      project: ['', Validators.nullValidator],
      part: ['', Validators.nullValidator],
      designation: ['', Validators.nullValidator]
    })
  }
}
