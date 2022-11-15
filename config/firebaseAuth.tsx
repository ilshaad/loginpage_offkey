// main setup for firebase and its authentication

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0al7sL25WX5KTDCbvZIDKe4A6uKJJFEI",
  authDomain: "loginpage-offkey.firebaseapp.com",
  projectId: "loginpage-offkey",
  storageBucket: "loginpage-offkey.appspot.com",
  messagingSenderId: "370035046822",
  appId: "1:370035046822:web:7d2463d7c6b98572b43767",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authObject = getAuth();
