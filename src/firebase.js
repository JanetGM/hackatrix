import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA70kAGHYkedXJien7iQrd_xaGvj4zaptQ",
    authDomain: "vecinaccion.firebaseapp.com",
    databaseURL: "https://vecinaccion.firebaseio.com",
    projectId: "vecinaccion",
    storageBucket: "vecinaccion.appspot.com",
    messagingSenderId: "74633213985",
    appId: "1:74633213985:web:dec377c53fd8b115"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const storage = firebase.storage();
  export const firebaseAuth = firebase.auth;
