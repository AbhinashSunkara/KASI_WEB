export interface UserRegister 
{
  username: string;
  email: string;
  phoneNumber?: string; // optional
  password: string;
  captchaId: string;       // Used for captcha validation
  captchaToken: string;  
  otpVerificationId: string;
}
