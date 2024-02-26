import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/users/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {

  public registerForm: FormGroup;
  public liste_role = [{ value: "Methodiste", viewValue: "Méthodiste" }, { value: "Qualite", viewValue: "Qualité" }, { value: "PM", viewValue: "PM" }];
  public liste_service = [{ value: "Methodes", viewValue: "Méthodes" }, { value: "Qualite", viewValue: "Qualité" }, { value: "Manager", viewValue: "Manager" }];

  public isNameError = false;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.registerForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      roles: ['basic'], // Basic est la valeur par défaut
      services: [''],
      projects: [''],
      password: ['', Validators.required]
    });
  }

  onChangeName(ev: any) {
    const inputName = ev.detail.value
    console.log("nom changé", inputName);
    if (inputName == 'toto') {

    } else {
      this.isNameError = true;
    }
  }
  onRegisterClick() {
    const user = this.registerForm.value
    if (user) {
      this.userService.addUser(user)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigate(['home'])
          },
          error: (err) => {
            console.error(err);
            alert("erreur lors de l'enregistrement")
          }
        })
    }
  }


}
