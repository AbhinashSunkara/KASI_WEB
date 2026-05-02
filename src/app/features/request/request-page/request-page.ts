import { Component } from '@angular/core';
import { RequestContextService } from '../../../core/services/request.context';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-page',
  standalone: false,
  templateUrl: './request-page.html',
  styleUrl: './request-page.css',
})
export class RequestPage {
constructor(
    public ctx: RequestContextService,
    private router: Router
  ) {}

  goToLogin() {
    this.router.navigate(['/auth/login'], {
      queryParams: { returnUrl: '/request' }
    });
  }}
