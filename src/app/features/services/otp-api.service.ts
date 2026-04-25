import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { ApiService } from '../../core/services/apiservice';
import { environment } from '../../../environments/environment';
import { SendEmailOtpRequest } from '../../models/SendEmailOtpRequest';
import { RecipientType } from '../../models/Enums';
import { CaptchaResponse, CaptchaVerifyRequestDto, CaptchaVerifyResponse } from '../../models/CaptchaResponse ';

@Injectable({ providedIn: 'root' })
export class OtpApiService {
  constructor(private apiService: ApiService) {}
  private baseUrl = environment.kasiApiUrl;


  // Send OTP to user
  async sendEmailOtp(data: SendEmailOtpRequest): Promise<void> {
    await this.apiService.postAsync(this.baseUrl, 'otp/send/email', data);
  }

  // Verify OTP entered by the user
  verifyOtp(userId: string | null, recipient: string, recipientType: RecipientType, otpCode: string ): Promise<any> {
      let params = new HttpParams();
      if (userId !== null) 
      {
        params = params.set('userId', userId);
      }
      params = params
        .set('recipient', recipient)
        .set('recipientType', recipientType.toString())
        .set('otpCode', otpCode);

    return this.apiService.postAsync(this.baseUrl, 'otp/verify', {}, params);
  }


  // Option 2: Return Promise by converting observable to promise
  getCaptcha(): Promise<CaptchaResponse> {
      return this.apiService.getAsync<CaptchaResponse>(this.baseUrl, 'captcha');
  }

  verifyCaptcha(captchaVerifyRequestDto: CaptchaVerifyRequestDto): Promise<CaptchaVerifyResponse> {
      return this.apiService.postAsync(this.baseUrl, 'captcha/verify', captchaVerifyRequestDto);
  }
}
