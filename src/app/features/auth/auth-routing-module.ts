import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { OauthCallback } from './oauth-callback/oauth-callback';

const routes: Routes = [
  {
      path: 'login',
      component: Login
    },
    {
      path: 'register',
      component: Register
    },
    { path: 'oauth-callback', component: OauthCallback },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
