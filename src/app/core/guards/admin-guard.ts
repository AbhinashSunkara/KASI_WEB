import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RequestContextService } from '../services/request.context';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private context: RequestContextService,
    private router: Router
  ) {}

  canActivate(): boolean {

    if (this.context.isLoggedIn && this.context.isAdmin) {
      return true;
    }

    this.router.navigate(['/unauthorized']);
    return false;
  }
}