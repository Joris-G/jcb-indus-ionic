import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginFormComponent } from 'src/app/_pages/login/login-form/login-form.component';
import { CheckUserService } from 'src/app/_services/users/check-user.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,

  ],
  declarations: [LoginPage, LoginFormComponent],
  providers: [CheckUserService,]
})
export class LoginPageModule { }
