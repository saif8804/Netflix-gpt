// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkok1TQSw1JmeftyTZgxGq6y9T_LKojlc",
  authDomain: "netflix-gpt2-e25bc.firebaseapp.com",
  projectId: "netflix-gpt2-e25bc",
  storageBucket: "netflix-gpt2-e25bc.firebasestorage.app",
  messagingSenderId: "602855110758",
  appId: "1:602855110758:web:8b1799280b60d72ce215a7",
  measurementId: "G-5NZGPPDWDY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();