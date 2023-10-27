// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl9Mpsg1EtCbddTJyLMBrjOy18-AFyYrM",
  authDomain: "eltambito-61adf.firebaseapp.com",
  projectId: "eltambito-61adf",
  storageBucket: "eltambito-61adf.appspot.com",
  messagingSenderId: "287013919817",
  appId: "1:287013919817:web:77db6febdf2ac94d5e3398",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
