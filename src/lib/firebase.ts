// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ2wL66_xVnVrXuGX8OAU69ULbLVGf4DI",
  authDomain: "kalendar-426d5.firebaseapp.com",
  projectId: "kalendar-426d5",
  storageBucket: "kalendar-426d5.appspot.com",
  messagingSenderId: "2984270262",
  appId: "1:2984270262:web:2cdb2952fab65ef0ba8917",
  measurementId: "G-CWS6MEEC0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

