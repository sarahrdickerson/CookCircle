import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import {getAuth} from "firebase/auth";
// import {...} from "firebase/database";
import {getFirestore} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAAnkxdqRqDlBPl6XmAJG_j4DdKdSTGhtc",
    authDomain: "cook-circle.firebaseapp.com",
    projectId: "cook-circle",
    storageBucket: "cook-circle.appspot.com",
    messagingSenderId: "947977507980",
    appId: "1:947977507980:web:6f621f728f6c10d66517a9",
    measurementId: "G-MZE016QS0Y"
  };

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const FIREBASE_APP = app;
export const FIREBASE_AUTH = getAuth(app);
export const FIREBASE_FIRESTORE = getFirestore(app);