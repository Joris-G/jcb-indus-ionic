import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/authentication/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  passwordError = signal<boolean>(false);


  async onSubmit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;
    this.authService.login(email!, password!)
      .subscribe(
        {
          next: () => { this.router.navigate(['home']); },
          error: (err) => {
            this.passwordError.set(true);
          }
        }
      );
  }

  get emailControl() {
    return this.form.get('email');
  }

  get passwordControl() {
    return this.form.get('password');
  }


}
