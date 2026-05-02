import { Component } from '@angular/core';
import { TokenService } from './core/services/token.service';
import { Store } from '@ngrx/store';
import { setAccessToken } from './core/services/auth.actions';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `<router-outlet></router-outlet>`
})
export class App {

  constructor(
  private tokenService: TokenService,
  private store: Store
) {}

ngOnInit() {
  const token = this.tokenService.getAccessToken();

  if (token) {
    this.store.dispatch(setAccessToken({ token }));

    const payload: any = JSON.parse(atob(token.split('.')[1]));

    this.store.dispatch({
      type: '[Auth] Restore User',
      role: payload.role || 'user',
      privileges: payload.privileges || [],
      features: payload.features || []
    });
  }
}

}