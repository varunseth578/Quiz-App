// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth for authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANHrhIEwaggIgiN-KJZcCWqkkrvVCZHPA",
  authDomain: "quiz-login-fbe0f.firebaseapp.com",
  projectId: "quiz-login-fbe0f",
  storageBucket: "quiz-login-fbe0f.appspot.com",
  messagingSenderId: "1091979583276",
  appId: "1:1091979583276:web:8c9ec6d32f5ab351465689",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
