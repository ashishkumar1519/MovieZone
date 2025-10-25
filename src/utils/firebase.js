// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB52HfrV3JYUEbeV4gqK3k7PhdQoUtW7c",
  authDomain: "moviezone-3f86d.firebaseapp.com",
  projectId: "moviezone-3f86d",
  storageBucket: "moviezone-3f86d.firebasestorage.app",
  messagingSenderId: "17655187943",
  appId: "1:17655187943:web:539f4cb9b264ecb14e5542",
  measurementId: "G-25DJE1ST0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);