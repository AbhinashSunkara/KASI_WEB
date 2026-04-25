import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthApiService } from '../../services/auth-api.service';
import { OtpApiService } from '../../services/otp-api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SendEmailOtpRequest } from '../../../models/SendEmailOtpRequest';
import { RecipientType } from '../../../models/Enums';
import { UserRegister } from '../../../models/UserRegister';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
})
export class Register implements OnInit {
  // 🔑 Form fields
  fullName = '';
  email = '';
  password = '';
  confirm = '';
  otp = '';
  captchaInput = '';
  originalEmail = '';
  isLoading = false;
  otpVerificationId = '';
  isSigningUp = false;

  // 📩 OTP state
  isOtpSent = false;
  isOtpVerified = false;
  isSendingOtp = false;
  isVerifyingOtp = false;


  // 🔒 Password visibility
  showPassword = false;
  showConfirmPassword = false;
  passwordFocused = false;
  confirmFocused = false;

  // 📝 Messages
  otpSentMessage = '';
  otpVerifyMessage = '';
  errorMessage = '';
  successMessage = '';

  // 🔐 Captcha
  captchaId = '';
  captchaImageUrl = '';
  timestamp = Date.now(); // bust cache

  @ViewChild('otpRef') otpRef!: NgModel;
  @ViewChild('captchaRef') captchaRef!: NgModel;

  constructor(
    private authApi: AuthApiService,
    private otpApi: OtpApiService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadCaptcha();
  }

  ngDoCheck(): void {
    if (this.isOtpVerified && this.email !== this.originalEmail) {
      this.isOtpVerified = false;
      this.otpVerifyMessage = 'Email changed. Please re-verify OTP.';
      this.otp = '';
    }
  }

  // 🔐 Load CAPTCHA
  loadCaptcha(): void {
    this.otpApi.getCaptcha()
      .then(response => {
        this.captchaId = response.captchaId;
        // append timestamp to bust cache
        this.captchaImageUrl = response.imageBase64;
      })
      .catch(err => {
        console.error('Failed to load captcha', err);
        this.captchaId = '';
        this.captchaImageUrl = '';
      });
  }

  // 🔄 Reset form state
  onReset(): void {
    this.fullName = '';
    this.email = '';
    this.otp = '';
    this.captchaInput = '';
    this.password = '';
    this.confirm = '';
    this.isOtpSent = false;
    this.isOtpVerified = false;
    this.otpSentMessage = '';
    this.otpVerifyMessage = '';
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.loadCaptcha();
  }

  // 📤 Send OTP
  async onSendOtp(): Promise<void> {
    if (!this.email) return;

    this.isSendingOtp = true;
    this.otpSentMessage = '';
    this.isOtpVerified = false;
    this.otpVerifyMessage = '';
    this.otp = '';

    try {
      const request: SendEmailOtpRequest = { email: this.email };
      await this.otpApi.sendEmailOtp(request);
      this.isOtpSent = true;
      this.otpSentMessage = 'OTP sent successfully!';
    } catch {
      this.otpSentMessage = 'Failed to send OTP. Please try again.';
    } finally {
      this.isSendingOtp = false;
    }
  }

  // ✅ Verify OTP
  async onVerifyOtp(): Promise<void> {
    if (!this.otp) return;

    this.isVerifyingOtp = true;
    this.otpVerifyMessage = '';

    try {
      const verified = await this.otpApi.verifyOtp('', this.email, RecipientType.Email, this.otp);
      if (verified.otpVerified) {
        this.isOtpVerified = true;
        this.originalEmail = this.email; 
        this.otpVerificationId = verified.verificationId;
        this.otpVerifyMessage = 'OTP verified successfully!';
      } else {
        this.isOtpVerified = false;
        this.otpVerifyMessage = 'Invalid OTP. Please try again.';
      }
    } catch {
      this.isOtpVerified = false;
      this.otpVerifyMessage = 'Invalid OTP. Please try again.';
    } finally {
      this.isVerifyingOtp = false;
    }
  }

  // 🚀 Signup submit
  async onSignup(form: NgForm): Promise<void> {
  if (
    form.invalid ||
    this.password !== this.confirm ||
    !this.isOtpVerified ||
    !this.captchaInput ||
    this.captchaRef.invalid
  ) {
    this.errorMessage = 'Please fix the errors above before submitting.';
    return;
  }

  this.isSigningUp = true;   // <-- changed
  this.errorMessage = '';
  this.successMessage = '';

  const registrationRequest: UserRegister = {
    username: this.fullName,
    email: this.email,
    password: this.password,
    captchaId: this.captchaId,
    captchaToken: this.captchaInput,
    otpVerificationId: this.otpVerificationId
  };

  try {
    await this.authApi.RegisterUser(registrationRequest);
    this.toastr.success('Registration successful!');
    this.router.navigate(['/login']);
    form.resetForm();
    this.resetStatesAfterSignup();
  } catch (error: any) {
    const msg = error?.error?.message || 'Signup failed. Please try again.';
    this.toastr.error(msg);
    this.loadCaptcha();
  } finally {
    this.isSigningUp = false;  // <-- changed
  }
}

  // 👁 Toggle password visibility
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // 🔐 Password strength helper
  get passwordStrength(): 'weak' | 'medium' | 'strong' {
    if (!this.password) return 'weak';
    if (this.password.length < 6) return 'weak';
    if (this.password.length < 10) return 'medium';
    return 'strong';
  }

  // ♻️ Reset helper
  private resetStatesAfterSignup(): void {
    this.isOtpSent = false;
    this.isOtpVerified = false;
    this.isSendingOtp = false;
    this.isVerifyingOtp = false;
    this.otpSentMessage = '';
    this.otpVerifyMessage = '';
    this.errorMessage = '';
    this.captchaInput = '';
    this.captchaId = '';
    this.captchaImageUrl = '';
    this.loadCaptcha();
  }
}
