// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5VW3EsfJ86wRPYhjM2kf3iRelz3vz4GA",
  authDomain: "netflix-90420.firebaseapp.com",
  projectId: "netflix-90420",
  storageBucket: "netflix-90420.appspot.com",
  messagingSenderId: "798543811204",
  appId: "1:798543811204:web:357fae4d1b894ca1ffe8d1",
  measurementId: "G-VNKFG4GZ8J"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();