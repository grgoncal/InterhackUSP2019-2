import firebase from 'firebase';
import secret from './secrets.js';

export const firebaseImpl = firebase.initializeApp(secret);
export const firebaseDatabase = firebase.database();
