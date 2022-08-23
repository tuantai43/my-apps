import { AuthActions, AuthActionTypes } from './auth.action';

export const authFeatureKey = '[lucky-draw][auth]';

export interface AuthState {
  loading: boolean;
  error: string;
  token: string;
  loadedToken: boolean;
  isLogged: boolean;
  refreshToken: string;
  registered: boolean;
  userId: string;
  firstName: string;
  lastName: string;
}

const initialState = (): AuthState => ({
  loading: false,
  error: '',
  token: '',
  loadedToken: false,
  isLogged: false,
  refreshToken: '',
  registered: false,
  userId: '',
  firstName: '',
  lastName: '',
});

export function authReducer(state = initialState(), action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoadToken: {
      return state;
    }
    case AuthActionTypes.LoadedToken: {
      return {
        ...state,
        token: action.token,
        refreshToken: action.refreshToken,
        userId: action.userId,
        loadedToken: true,
      };
    }
    case AuthActionTypes.LoadedAuth: {
      return {
        ...state,
        loading: false,
        isLogged: true,
        token: action.token,
        refreshToken: action.refreshToken,
        userId: action.userId,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    }
    case AuthActionTypes.LoadedUser: {
      return {
        ...state,
        isLogged: true,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    }
    case AuthActionTypes.UpdateLoading: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case AuthActionTypes.UpdateError: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case AuthActionTypes.Registered: {
      return {
        ...state,
        loading: false,
        registered: action.registered,
      };
    }
    case AuthActionTypes.ResetAuth: {
      return {
        ...state,
        loading: false,
        isLogged: false,
        token: '',
        refreshToken: '',
        userId: '',
        firstName: '',
        lastName: '',
      };
    }
    default: {
      return state;
    }
  }
}
