// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-15b8d.firebaseapp.com",
  projectId: "mern-estate-15b8d",
  storageBucket: "mern-estate-15b8d.appspot.com",
  messagingSenderId: "853343030132",
  appId: "1:853343030132:web:24f5923a53d445a02afa21"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);