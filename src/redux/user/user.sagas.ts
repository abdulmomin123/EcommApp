import { all, call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase/app';
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from '../../firebase/firebase.utils';
import { EmailPassword, SignupInfo, UserActions } from '../../Types';
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signupFailure,
} from './user.actions';

function* getSnapshotFromUserAuth(
  userAuth: firebase.User,
  additionalData?: object
) {
  try {
    const userRef = yield createUserProfileDocument(userAuth, additionalData);

    const snapshot = yield userRef.get();

    yield put(signInSuccess(snapshot.data()));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

// Signin for google
function* signInWithGoogle() {
  const { user } = yield auth.signInWithPopup(googleProvider);
  yield getSnapshotFromUserAuth(user);
}

export function* onGoogleSignInStart() {
  yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle);
}

// Signin for email & password
function* signinWithEmailPassword({ payload }: UserActions) {
  const { email, password } = payload as EmailPassword;
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  yield getSnapshotFromUserAuth(user);
}

function* onEmailPasswordSignInStart() {
  yield takeLatest('EMAIL_SIGN_IN_START', signinWithEmailPassword);
}

// Checks if the user is logged in
function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

function* onCheckUserSession() {
  yield takeLatest('CHECK_USER_SESSION', isUserAuthenticated);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err.message));
  }
}

function* onSignoutStart() {
  yield takeLatest('SIGN_OUT_START', signOut);
}

// Sign up func
function* signup({ payload }: UserActions) {
  try {
    const { email, password, displayName } = payload as SignupInfo;

    // Getting the user authenticated
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user, { displayName });
  } catch (err) {
    yield put(signupFailure(err.message));
  }
}

function* onSignupStart() {
  yield takeLatest('SIGN_UP_START', signup);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailPasswordSignInStart),
    call(onCheckUserSession),
    call(onSignoutStart),
    call(onSignupStart),
  ]);
}
