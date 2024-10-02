// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FIREBASE_API_KEY } from "@env"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "mini-project-b4ea0.firebaseapp.com",
  projectId: "mini-project-b4ea0",
  storageBucket: "mini-project-b4ea0.appspot.com",
  messagingSenderId: "363917414993",
  appId: "1:363917414993:web:fcf31c2f4d41a9d53d1e70",
  measurementId: "G-PKCV9BZTLZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
