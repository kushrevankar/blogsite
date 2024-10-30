// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "kashmir-blog.firebaseapp.com",
  projectId: "kashmir-blog",
  storageBucket: "kashmir-blog.appspot.com",
  messagingSenderId: "276707626463",
  appId: "1:276707626463:web:e34721704c2972e731086a",
  measurementId: "G-9YWVB7DF5E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);