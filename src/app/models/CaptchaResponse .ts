export interface CaptchaResponse {
  captchaId: string;
  imageBase64: string;
}

export interface CaptchaVerifyRequestDto
{
  captchaId: string;
  userInput: string;
}

export interface CaptchaVerifyResponse {
  success: boolean;
  message: string;
}
