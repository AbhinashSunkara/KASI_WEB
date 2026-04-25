import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { Register } from './register/register';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';
import { OauthCallback } from './oauth-callback/oauth-callback';


@NgModule({
  declarations: [
    Register,
    Login,
    OauthCallback
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
