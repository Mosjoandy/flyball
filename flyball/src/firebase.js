// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3cQnVi6nQMLXw_ARM5wIOtuxOROUFWkA",
  authDomain: "usflyball-1790c.firebaseapp.com",
  projectId: "usflyball-1790c",
  storageBucket: "usflyball-1790c.appspot.com",
  messagingSenderId: "335622839271",
  appId: "1:335622839271:web:0a3be9a650c9c76fb7fb42",
  measurementId: "G-B6WJEG6P5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);