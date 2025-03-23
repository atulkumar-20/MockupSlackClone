// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBfRxO57jUmukGUd7GLQI4q5YMeUiI2TKc",
  authDomain: "mockupslackclone.firebaseapp.com",
  projectId: "mockupslackclone",
  storageBucket: "mockupslackclone.firebasestorage.app",
  messagingSenderId: "724688194521",
  appId: "1:724688194521:web:7436b8080f841c34b9e7c8",
  measurementId: "G-KXQH8B7E1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();