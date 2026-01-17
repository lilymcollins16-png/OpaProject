// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgybjJV_eJU0vkH3fiSt48SFpO652Ipg4",
  authDomain: "opa-project-d64c1.firebaseapp.com",
  projectId: "opa-project-d64c1",
  storageBucket: "opa-project-d64c1.firebasestorage.app",
  messagingSenderId: "540733831310",
  appId: "1:540733831310:web:db6c6bc6312a917c01b1df",
  measurementId: "G-0EF4CTEP8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);