import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setAccessToken } from '../../../core/services/auth.actions';

@Component({
  selector: 'app-oauth-callback',
  standalone: false,
  templateUrl: './oauth-callback.html',
  styleUrl: './oauth-callback.css',
})
export class OauthCallback implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private store: Store) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    const refreshToken = this.route.snapshot.queryParamMap.get('refreshToken');

    if (token && refreshToken) {

  localStorage.setItem('access_token', token);
  localStorage.setItem('refresh_token', refreshToken);

  this.store.dispatch(setAccessToken({ token }));

  // 🔹 Check if we saved a return URL (from compiler)
  const returnUrl = sessionStorage.getItem('returnUrl');

  if (returnUrl) {
      sessionStorage.removeItem('returnUrl');
      this.router.navigateByUrl(returnUrl);
  } else {
      this.router.navigate(['/']);
    }

  } else {
    this.router.navigate(['/login']);
  }
}
}