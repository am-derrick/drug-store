// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// firebase configuration file and keys
const firebaseConfig = {
    apiKey: "AIzaSyAcwtRXFMvgnqJNzrEXC88T-VCmJAsEWlk",
    authDomain: "drug-store-9dcfb.firebaseapp.com",
    projectId: "drug-store-9dcfb",
    storageBucket: "drug-store-9dcfb.appspot.com",
    messagingSenderId: "920325085406",
    appId: "1:920325085406:web:cc32aac83dafa6d66f8a4f",
    measurementId: "G-EE484Q14L2"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };