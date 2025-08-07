// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDug4XG5cHqqDMLVefTVMHfuV4LVOaH-f4",
  authDomain: "craa-a5ee3.firebaseapp.com",
  projectId: "craa-a5ee3",
  storageBucket: "craa-a5ee3.firebasestorage.app",
  messagingSenderId: "613919051681",
  appId: "1:613919051681:web:dd9f93119f7c943af8c5e0",
  measurementId: "G-D8S2C2CBXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);