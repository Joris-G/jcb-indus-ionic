import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_interfaces/user.interface';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-formulaire-utilisateur',
  templateUrl: './formulaire-utilisateur.component.html',
  styleUrls: ['./formulaire-utilisateur.component.scss'],
})
export class FormulaireUtilisateurComponent {

  public registerForm: FormGroup;
  public liste_role=[{value:"Methodiste",viewValue:"Méthodiste"},{value:"Qualite",viewValue:"Qualité"},{value:"PM",viewValue:"PM"}];
  public liste_service=[{value:"Methodes",viewValue:"Méthodes"},{value:"Qualite",viewValue:"Qualité"},{value:"Manager",viewValue:"Manager"}];

  public isNameError = false;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { 
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

  onChangeName(ev:any){
    const inputName = ev.detail.value
    console.log("nom changé", inputName );
    if(inputName=='toto'){

    }else {
      this.isNameError = true;
    }
  }
  onRegisterClick() {
    const user = this.registerForm.value
    if(user){
      this.userService.addUser(user)
      .subscribe({
        next:(response)=>{
console.log(response);
          this.router.navigate(['home'])
        },
        error:(err)=>{
          console.error(err);
          alert("erreur lors de l'enregistrement")
        }
      })
    }}


}
