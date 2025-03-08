import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChronoService } from 'src/app/_services/chrono/chrono.service';

@Component({
  selector: 'app-create-chrono-form',
  templateUrl: './create-chrono-form.component.html',
  styleUrls: ['./create-chrono-form.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule]
})
export class CreateChronoFormComponent   {
  getGroup(_t54: AbstractControl<any, any>): FormGroup<any> {
    return _t54 as FormGroup
  }
  test(_t54: AbstractControl<any, any>) {
    console.log(_t54);
  }

  getControl(formGroup: AbstractControl<any, any>, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl;
  }


  private readonly fb = inject(FormBuilder);
  readonly chronoService = inject(ChronoService);
  createChronoForm!: FormGroup;

  constructor() {
    this.createChronoForm = this.fb.group({
      name: ['', Validators.required],
      project: ['', Validators.nullValidator],
      goal: ['', Validators.nullValidator],
      chronos: this.fb.array([])
    });
  }

  get chronos(): FormArray {
    return this.createChronoForm.get('chronos') as FormArray;
  }

  getParts(chronoIndex: number): FormArray {
    const chrono = this.chronos.at(chronoIndex);
    return chrono.get('parts') as FormArray;
  }

  addAChronoClick() {
    const newChrono = this.fb.group({
      parts: this.fb.array([])
    });
    this.chronos.push(newChrono);
  }

  addAPartClick(chronoIndex: number) {
    const chrono = this.chronos.at(chronoIndex);
    if (chrono) {
      const parts = chrono.get('parts') as FormArray;
      const newPart = this.fb.group({
        partNumber: [''],
        designation: [''],
        workorder: ['']
      });
      parts.push(newPart);
    }
  }

  newChronoInput() {
    console.log(this.createChronoForm.value);
    this.chronoService.createChrono(this.createChronoForm.value)
      .subscribe({
        next: (value) => {
          this.createChronoForm.reset();
          this.clearFormArray(this.chronos);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }
}