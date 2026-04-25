import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAccessToken = createSelector(
  selectAuthState,
  (state) => state.accessToken
);

export const selectIsLoggedIn = createSelector(
  selectAccessToken,
  (token) => !!token
);

export const selectPrivileges = createSelector(
  selectAuthState,
  (state) => state.privileges
);

export const selectFeatures = createSelector(
  selectAuthState,
  (state) => state.features
);

export const selectRole = createSelector(
  selectAuthState,
  (state) => state.role
);
