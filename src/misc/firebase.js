import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDv6b9iMsoip__SvUHaJyaEcPrGbRKhDuU',
  authDomain: 'chat-app-2049c.firebaseapp.com',
  databaseURL: 'https://chat-app-2049c-default-rtdb.firebaseio.com',
  projectId: 'chat-app-2049c',
  storageBucket: 'chat-app-2049c.appspot.com',
  messagingSenderId: '510677864771',
  appId: '1:510677864771:web:e43f0628b174b493971ff6',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
