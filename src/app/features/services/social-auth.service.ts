import { GoogleLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SocialAuthWrapperService {
  constructor(private socialAuth: SocialAuthService) {}

  loginWithGoogle(): Promise<SocialUser> {
    return this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout(): Promise<void> {
    return this.socialAuth.signOut();
  }
}
