export interface AuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
  privileges: string[];
  features: string[];
  role: string;
}

export const initialAuthState: AuthState = {
  accessToken: null,
  isLoggedIn: false,
  privileges: [],
  features: ["1234"],
  role: 'user'
};
