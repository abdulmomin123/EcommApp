import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { UserProfile } from '../Types';

const config = {
  apiKey: 'AIzaSyD2zy9VJ2ojAzSY9zMLND4icPYSw0JNuBk',
  authDomain: 'ecommapp-50bc3.firebaseapp.com',
  projectId: 'ecommapp-50bc3',
  storageBucket: 'ecommapp-50bc3.appspot.com',
  messagingSenderId: '892219641343',
  appId: '1:892219641343:web:6713a613d83b3332e5ebca',
  measurementId: 'G-JZLWFG4Y8R',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Create user
export const createUserProfileDocument = async (
  userAuth: firebase.User,
  additionalData?: object
) => {
  // User ref object
  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // If the user exists just return the userRef
  if (snapShot.exists) return userRef;

  // Creating the user
  try {
    const { uid, email, displayName } = userAuth;
    const createdAt = new Date();

    const userProfile: UserProfile = {
      uid,
      email,
      displayName,
      createdAt,
      ...additionalData,
    };

    await userRef.set(userProfile);
  } catch (err) {
    alert(err);
  }

  return userRef;
};

// Google auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;

// Checks if the user is logged in
export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
