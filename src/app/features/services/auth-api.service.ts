import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/apiservice';
import { LoginRequest, ResetPasswordRequest } from '../../models/LoginRequest';
import { environment } from '../../../environments/environment';
import { UserRegister } from '../../models/UserRegister';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private baseUrl = environment.kasiApiUrl;

  constructor(private http: ApiService) {}

  async Login(data: LoginRequest): Promise<LoginResponse> {
    console.log('Sending login request with data:', data);
    return await this.http.postAsync(this.baseUrl, 'auth/user/login', data);
  }

  async RegisterUser(data: UserRegister): Promise<void> {
    return await this.http.postAsync(this.baseUrl, 'auth/user/register', data);
  }
  
  async resetPassword(data: ResetPasswordRequest): Promise<void> {
    return await this.http.postAsync(this.baseUrl, 'auth/user/reset-password', data);
  }

  loginWithGoogle(): void {
    console.log('Redirecting to Google login');
  window.location.href = environment.googleLogin;
  }
}
