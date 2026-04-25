import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import * as AuthActions from './auth.actions';
import { jwtDecode }   from 'jwt-decode';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.setAccessToken, (state, { token }) => {
    const decoded: any = decodeToken(token);
    return {
      ...state,
      accessToken: token,
      isLoggedIn: true,
      privileges: decoded.privileges || [],
      features: decoded.features || [],
      role: decoded.role || 'user' // Default to 'user' if role is not present
    };
  }),

  on(AuthActions.clearAuthState, () => initialAuthState)
);

function decodeToken(token: string): any {
  try {
    return jwtDecode(token);
  } catch {
    return {};
  }
}
