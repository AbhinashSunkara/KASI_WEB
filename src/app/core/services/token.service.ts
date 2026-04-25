import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { setAccessToken } from "./auth.actions";

@Injectable({ providedIn: 'root' })
export class TokenService {
  /**
   *
   */
  constructor(private store: Store) {
  }
  private accessTokenKey = 'access_token';
  private refreshTokenKey = 'refresh_token';

  // In-memory storage
  private accessTokenInMemory: string | null = null;
  private refreshTokenInMemory: string | null = null;

  setTokens(accessToken: string, refreshToken: string): void {
    this.clearTokens();
    this.accessTokenInMemory = accessToken;
    this.refreshTokenInMemory = refreshToken;
    localStorage.setItem(this.accessTokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
    this.store.dispatch(setAccessToken({ token: accessToken }));
  }

  setAccessToken(token: string): void {
    this.clearAccessToken();
    this.accessTokenInMemory = token; // NEW
    localStorage.setItem('access_token', token);
    this.store.dispatch(setAccessToken({ token: token }));
  }

  setRefreshToken(token: string): void {
    this.clearRefreshToken();
    this.refreshTokenInMemory = token;
    localStorage.setItem('refresh_token', token);
  }

  getAccessToken(): string | null {
    return this.accessTokenInMemory || localStorage.getItem(this.accessTokenKey);
  }

  getRefreshToken(): string | null {
    return this.refreshTokenInMemory || localStorage.getItem(this.refreshTokenKey);
  }

  clearTokens(): void {
    this.accessTokenInMemory = null;
    this.refreshTokenInMemory = null;

    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  clearAccessToken(): void {
    this.accessTokenInMemory = null;

    localStorage.removeItem(this.accessTokenKey);
  }

  clearRefreshToken(): void {
    this.refreshTokenInMemory = null;

    localStorage.removeItem(this.refreshTokenKey);
  }
}
