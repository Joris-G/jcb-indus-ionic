import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_services/authentication/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  private authService = inject(AuthService);
  public isLoading$: Observable<boolean> = this.authService.isInLogginProcess$;

  onLoginClick() {

    this.authService.login('joris.grangier@amacaerospace.com', 'test')
      .subscribe({
        next(value) {
          // Ce qu'il se passe quand un reçoit une réponse positive. Ou négative mais maitrisé par le serveur par exemple un compte expiré  ou autre
        },
        error(err) {
          // ce qu'il se passe lorsqu'une erreur inconnue survient
          console.error(err);
        },
      });
  }


}
