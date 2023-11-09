import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  public registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['basic'], // Basic est la valeur par défaut
      service: [''],
      projets: [''],
      motDePasse: ['', Validators.required]
    });
  }

  onRegisterClick() {
console.log(this.registerForm.value);
  }
  
  ngOnInit() {
  }

}