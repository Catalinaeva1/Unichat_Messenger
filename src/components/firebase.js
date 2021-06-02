import firebase from  "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyCsEOtuf-axCxn-YOjoaiajAzF8HxO4rXk",
    authDomain: "unichat-3f5dc.firebaseapp.com",
    projectId: "unichat-3f5dc",
    storageBucket: "unichat-3f5dc.appspot.com",
    messagingSenderId: "338067066095",
    appId: "1:338067066095:web:12588059a423d478e29f1a"
  }).auth();