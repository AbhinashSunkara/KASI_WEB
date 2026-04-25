export interface LoginRequest {
  email: string;           // Required, must be a valid email
  password: string;        // Required, min length 6
  captchaId: string;       // Used for captcha validation
  captchaToken: string;  
  ipAddress?: string;      // Optional
  deviceId?: string;       // Optional
  deviceType?: string;     // Optional
  otpCode?: string;        // Optional
}

export interface ResetPasswordRequest {
  email: string;           // Required
  newPassword: string;     // Required
  confirmPassword: string; // Required, should match newPassword
  otpVerificationId: string;
}