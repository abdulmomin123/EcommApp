import {
  EmailPassword,
  SignupInfo,
  UserActions,
  UserProfile,
} from '../../Types';

// For google signin
export const googleSignInStart = (): UserActions => ({
  type: 'GOOGLE_SIGN_IN_START',
  payload: null,
});

// For email-password signin
export const emailSignInStart = (
  emailPassword: EmailPassword
): UserActions => ({
  type: 'EMAIL_SIGN_IN_START',
  payload: emailPassword,
});

export const signInSuccess = (userProfile: UserProfile): UserActions => ({
  type: 'SIGN_IN_SUCCESS',
  payload: userProfile,
});

export const signInFailure = (errorMessage: string): UserActions => ({
  type: 'SIGN_IN_FAILURE',
  payload: errorMessage,
});

export const checkUserSession = (): UserActions => ({
  type: 'CHECK_USER_SESSION',
  payload: null,
});

export const signOutStart = (): UserActions => ({
  type: 'SIGN_OUT_START',
  payload: null,
});

export const signOutSuccess = (): UserActions => ({
  type: 'SIGN_OUT_SUCCESS',
  payload: null,
});

export const signOutFailure = (errorMessage: string): UserActions => ({
  type: 'SIGN_OUT_FAILURE',
  payload: errorMessage,
});

export const signupStart = (signupInfo: SignupInfo): UserActions => ({
  type: 'SIGN_UP_START',
  payload: signupInfo,
});

export const signupFailure = (errorMessage: string): UserActions => ({
  type: 'SIGN_UP_FAILURE',
  payload: errorMessage,
});
